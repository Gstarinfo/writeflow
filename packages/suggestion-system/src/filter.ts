import { Suggestion, SuggestionConfidenceTier } from './types.js';

export function getConfidenceTier(confidence: number): SuggestionConfidenceTier {
  if (confidence >= 0.95) return 'high';
  if (confidence >= 0.80) return 'medium';
  if (confidence >= 0.60) return 'low';
  return 'hidden';
}

export interface FilterOptions {
  minConfidence?: number;
  ignoredRuleIds?: Set<string>;
  ignoredWords?: Set<string>;
  personalDictionary?: Set<string>;
  allowLowConfidence?: boolean;
}

export function filterSuggestions(
  suggestions: Suggestion[],
  options: FilterOptions = {}
): Suggestion[] {
  const {
    minConfidence = 0.60,
    ignoredRuleIds = new Set(),
    ignoredWords = new Set(),
    personalDictionary = new Set(),
    allowLowConfidence = false
  } = options;

  return suggestions.filter(s => {
    // Check confidence threshold
    const tier = getConfidenceTier(s.confidence);
    if (tier === 'hidden') return false;
    if (tier === 'low' && !allowLowConfidence) return false;
    if (s.confidence < minConfidence) return false;

    // Check ignored rules
    if (s.ruleId && ignoredRuleIds.has(s.ruleId)) return false;

    // Check ignored words (case-insensitive)
    const lowerOriginal = s.original.toLowerCase().trim();
    if (ignoredWords.has(lowerOriginal)) return false;

    // Check personal dictionary for spelling errors
    if (s.type === 'spelling' && personalDictionary.has(lowerOriginal)) return false;

    return true;
  });
}

export function sortSuggestions(suggestions: Suggestion[]): Suggestion[] {
  return [...suggestions].sort((a, b) => {
    // Sort primarily by document position
    if (a.start !== b.start) {
      return a.start - b.start;
    }
    // Then by severity: error > warning > improvement > info
    const severityOrder = { error: 0, warning: 1, improvement: 2, info: 3 };
    const sevA = severityOrder[a.severity] ?? 99;
    const sevB = severityOrder[b.severity] ?? 99;
    if (sevA !== sevB) {
      return sevA - sevB;
    }
    // Then by confidence descending
    return b.confidence - a.confidence;
  });
}
