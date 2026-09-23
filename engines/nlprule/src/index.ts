import { DocumentModel } from '@writeflow/document-model';
import { Suggestion } from '@writeflow/suggestion-system';
import { GRAMMAR_RULES } from './rules.js';
import { isWordInDictionary, findSpellingCandidates, COMMON_TYPOS, CONTRACTION_SPELLING_MAP } from './spelling.js';

let suggestionCounter = 0;

export class NLPRuleEngine {
  public checkDocument(doc: DocumentModel, customDictionary?: Set<string>): Suggestion[] {
    const suggestions: Suggestion[] = [];
    const text = doc.rawText;

    if (!text.trim()) {
      return [];
    }

    // Track ranges covered by grammar rules so spelling doesn't duplicate them
    const grammarRanges: Array<{ start: number; end: number }> = [];

    // 1. Run pattern grammar rules
    for (const rule of GRAMMAR_RULES) {
      const regex = new RegExp(rule.regex.source, rule.regex.flags);
      let match: RegExpExecArray | null;

      while ((match = regex.exec(text)) !== null) {
        const matchedText = match[0];
        const start = match.index;
        const end = start + matchedText.length;

        const replacement = typeof rule.replacement === 'function' ? rule.replacement(match) : rule.replacement;
        const explanation = typeof rule.explanation === 'function' ? rule.explanation(match) : rule.explanation;

        suggestions.push({
          id: `sugg_rule_${Date.now()}_${++suggestionCounter}`,
          engine: 'grammar',
          type: rule.type,
          category: rule.category,
          start,
          end,
          original: matchedText,
          replacement,
          replacements: [replacement],
          confidence: rule.confidence,
          severity: rule.severity,
          explanation,
          ruleId: rule.id,
          context: text.slice(Math.max(0, start - 20), Math.min(text.length, end + 20))
        });

        grammarRanges.push({ start, end });
      }
    }

    // 2. Run spelling / typo checks on document tokens
    for (const sentence of doc.sentences) {
      for (const token of sentence.tokens) {
        if (!token.isWord) continue;

        // Skip if token overlaps with a grammar rule match
        if (grammarRanges.some(r => token.start >= r.start && token.end <= r.end)) {
          continue;
        }

        const rawToken = token.text;
        const lowerToken = rawToken.toLowerCase();

        // Skip URLs, emails, numbers, or symbols
        if (/^https?:\/\/|@|\d/.test(rawToken)) continue;
        // Skip all-caps acronyms of 2+ letters (e.g. NASA, JSON, CSS, API)
        if (/^[A-Z]{2,}$/.test(rawToken)) continue;

        // Check missing apostrophes in contractions (e.g. dont -> don't, cant -> can't)
        if (CONTRACTION_SPELLING_MAP[lowerToken]) {
          const expected = CONTRACTION_SPELLING_MAP[lowerToken];
          const formatted = rawToken[0] === rawToken[0].toUpperCase() && rawToken.length > 1
            ? expected[0].toUpperCase() + expected.slice(1)
            : expected;

          suggestions.push({
            id: `sugg_apostrophe_${Date.now()}_${++suggestionCounter}`,
            engine: 'grammar',
            type: 'punctuation',
            category: 'apostrophes',
            start: token.start,
            end: token.end,
            original: rawToken,
            replacement: formatted,
            replacements: [formatted],
            confidence: 0.96,
            severity: 'error',
            explanation: `Missing apostrophe in the contraction "${rawToken}". Did you mean "${formatted}"?`,
            ruleId: 'SPELLING_MISSING_APOSTROPHE',
            context: sentence.text
          });
          continue;
        }

        // Check common typos directly
        if (COMMON_TYPOS[lowerToken]) {
          const expected = COMMON_TYPOS[lowerToken];
          const formatted = rawToken[0] === rawToken[0].toUpperCase() && rawToken.length > 1
            ? expected[0].toUpperCase() + expected.slice(1)
            : expected;

          suggestions.push({
            id: `sugg_spell_${Date.now()}_${++suggestionCounter}`,
            engine: 'grammar',
            type: 'spelling',
            category: 'misspelled_word',
            start: token.start,
            end: token.end,
            original: rawToken,
            replacement: formatted,
            replacements: [formatted],
            confidence: 0.98,
            severity: 'error',
            explanation: `"${rawToken}" is misspelled. Did you mean "${formatted}"?`,
            ruleId: 'SPELLING_COMMON_TYPO',
            context: sentence.text
          });
          continue;
        }

        // Check against full dictionary
        if (!isWordInDictionary(rawToken, customDictionary)) {
          const candidates = findSpellingCandidates(rawToken, 4);
          const topCandidate = candidates[0] || rawToken;

          suggestions.push({
            id: `sugg_spell_${Date.now()}_${++suggestionCounter}`,
            engine: 'grammar',
            type: 'spelling',
            category: 'misspelled_word',
            start: token.start,
            end: token.end,
            original: rawToken,
            replacement: topCandidate,
            replacements: candidates.length > 0 ? candidates : [topCandidate],
            confidence: candidates.length > 0 ? 0.92 : 0.75,
            severity: 'error',
            explanation: candidates.length > 0
              ? `Possible spelling error for "${rawToken}". Did you mean "${topCandidate}"?`
              : `Possible unknown word or spelling mistake "${rawToken}".`,
            ruleId: 'SPELLING_UNKNOWN_WORD',
            context: sentence.text
          });
        }
      }
    }

    return suggestions;
  }
}

export const nlpRuleEngine = new NLPRuleEngine();
export * from './rules.js';
export * from './spelling.js';

