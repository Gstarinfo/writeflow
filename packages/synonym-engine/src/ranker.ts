import { POS, VocabularyLevel, SynonymCategory, SynsetRecord, wordNetProvider } from '@writeflow/engine-wordnet';

export interface SynonymOptions {
  vocabularyLevel?: VocabularyLevel;
  maxPerCategory?: number;
  includeAntonyms?: boolean;
  userPreferences?: string[];
}

export interface RankedSynonym {
  word: string;
  category: SynonymCategory;
  level: VocabularyLevel;
  score: number;
  definition?: string;
}

export interface CategorizedSynonyms {
  originalWord: string;
  lemma: string;
  detectedPos: POS;
  posName: string;
  detectedSense: string;
  definition: string;
  examples?: string[];
  categories: {
    similar: string[];
    stronger: string[];
    simpler: string[];
    formal: string[];
  };
  antonyms: string[];
  allCandidates: RankedSynonym[];
}

/**
 * Predicts POS from surrounding syntactic clues in a sentence
 */
export function detectPosFromContext(targetWord: string, sentenceText: string = ''): POS {
  const cleanTarget = targetWord.toLowerCase().trim();
  const lowerSentence = sentenceText.toLowerCase();

  // If sentence context is provided, look for syntactic markers
  if (lowerSentence && lowerSentence !== cleanTarget) {
    const matches = lowerSentence.match(/[a-z0-9]+(?:['’][a-z0-9]+)?/g);
    const words: string[] = matches ? Array.from(matches) : [];
    const targetIndex = words.indexOf(cleanTarget);

    if (targetIndex !== -1) {
      const prevWord = targetIndex > 0 ? words[targetIndex - 1] : '';
      const nextWord = targetIndex < words.length - 1 ? words[targetIndex + 1] : '';

      const determiners: string[] = ['the', 'a', 'an', 'this', 'that', 'my', 'your', 'his', 'her', 'their', 'our'];
      const nounHints: string[] = ['bag', 'box', 'luggage', 'room', 'shirt', 'car', 'weight', 'task', 'color'];
      const copulas: string[] = ['is', 'are', 'was', 'were', 'am', 'be', 'been', 'being', 'seems', 'feels', 'looks', 'tastes', 'sounds', 'remains'];
      const modals: string[] = ['to', 'can', 'will', 'would', 'could', 'should', 'must', 'might', 'do', 'does', 'did'];

      if (determiners.includes(prevWord)) {
        if (nounHints.includes(nextWord)) {
          return 'a'; // adjective
        }
        return 'n'; // noun
      }

      if (copulas.includes(prevWord)) {
        return 'a';
      }

      if (modals.includes(prevWord)) {
        return 'v';
      }

      if (cleanTarget.endsWith('ly')) {
        return 'r';
      }
    }
  }

  // If no context or context didn't decide, check WordNet database entry
  const entries = wordNetProvider.getEntries(cleanTarget);
  if (entries.length > 0) {
    return entries[0].pos;
  }

  // Fallback heuristics
  if (cleanTarget.endsWith('ly')) return 'r';
  if (cleanTarget.endsWith('ed') || cleanTarget.endsWith('ing') || cleanTarget.endsWith('ize') || cleanTarget.endsWith('ate')) return 'v';
  if (cleanTarget.endsWith('able') || cleanTarget.endsWith('ful') || cleanTarget.endsWith('ous') || cleanTarget.endsWith('al')) return 'a';

  return 'a';
}

/**
 * Disambiguates between multiple synsets using Lesk overlap scoring
 */
export function disambiguateSynset(
  synsets: SynsetRecord[],
  sentenceContext: string
): SynsetRecord | null {
  if (synsets.length === 0) return null;
  if (synsets.length === 1) return synsets[0];

  const matches = sentenceContext.toLowerCase().match(/[a-z0-9]+/g);
  const contextWords = new Set<string>(matches ? Array.from(matches) : []);

  let bestSynset = synsets[0];
  let maxScore = -1;

  for (const synset of synsets) {
    let score = 0;
    const defMatches = synset.definition.toLowerCase().match(/[a-z0-9]+/g);
    const defWords: string[] = defMatches ? Array.from(defMatches) : [];
    for (const w of defWords) {
      if (contextWords.has(w) && w.length > 3) {
        score += 2;
      }
    }
    if (synset.examples) {
      for (const ex of synset.examples) {
        const exMatches = ex.toLowerCase().match(/[a-z0-9]+/g);
        const exWords: string[] = exMatches ? Array.from(exMatches) : [];
        for (const w of exWords) {
          if (contextWords.has(w) && w.length > 3) {
            score += 3;
          }
        }
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestSynset = synset;
    }
  }

  return bestSynset;
}

const LEVEL_MULTIPLIERS: Record<VocabularyLevel, Record<VocabularyLevel, number>> = {
  simple: { simple: 1.5, natural: 1.2, professional: 0.9, academic: 0.7, advanced: 0.6 },
  natural: { simple: 1.1, natural: 1.5, professional: 1.3, academic: 0.9, advanced: 0.8 },
  professional: { simple: 0.8, natural: 1.1, professional: 1.5, academic: 1.3, advanced: 1.2 },
  academic: { simple: 0.6, natural: 0.8, professional: 1.2, academic: 1.5, advanced: 1.4 },
  advanced: { simple: 0.5, natural: 0.8, professional: 1.2, academic: 1.4, advanced: 1.5 }
};

export function scoreCandidate(
  candidateWord: string,
  category: SynonymCategory,
  level: VocabularyLevel,
  preferredLevel: VocabularyLevel = 'natural'
): number {
  let score = 100;

  const mult = LEVEL_MULTIPLIERS[preferredLevel]?.[level] ?? 1.0;
  score *= mult;

  if (category === 'similar') score += 15;
  if (category === 'stronger') score += 10;
  if (category === 'formal') score += 5;

  return Math.round(score);
}
