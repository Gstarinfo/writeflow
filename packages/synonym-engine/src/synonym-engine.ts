import { wordNetProvider, POS, VocabularyLevel, SynonymCategory } from '@writeflow/engine-wordnet';
import {
  SynonymOptions,
  CategorizedSynonyms,
  RankedSynonym,
  detectPosFromContext,
  disambiguateSynset,
  scoreCandidate
} from './ranker.js';

export interface SynonymSuggestionResult {
  word: string;
  hasResults: boolean;
  data?: CategorizedSynonyms;
}

const POS_NAMES: Record<POS, string> = {
  n: 'Noun',
  v: 'Verb',
  a: 'Adjective',
  r: 'Adverb'
};

export class SynonymEngine {
  public getSynonyms(
    word: string,
    sentenceContext: string = '',
    options: SynonymOptions = {}
  ): SynonymSuggestionResult {
    const cleanWord = word.trim().replace(/^[^\w]+|[^\w]+$/g, '');
    if (!cleanWord) {
      return { word, hasResults: false };
    }

    const { lemma } = wordNetProvider.lemmatize(cleanWord);
    const entries = wordNetProvider.getEntries(cleanWord);

    if (entries.length === 0) {
      return { word: cleanWord, hasResults: false };
    }

    // Step 1: Detect POS from context
    const detectedPos = detectPosFromContext(cleanWord, sentenceContext);

    // Step 2: Filter synsets by detected POS (or all if none match detected POS)
    let matchingEntries = entries.filter(e => e.pos === detectedPos);
    if (matchingEntries.length === 0) {
      matchingEntries = entries;
    }

    const allSynsets = matchingEntries.flatMap(e => e.synsets);
    if (allSynsets.length === 0) {
      return { word: cleanWord, hasResults: false };
    }

    // Step 3: Disambiguate to best synset
    const bestSynset = disambiguateSynset(allSynsets, sentenceContext) || allSynsets[0];
    const preferredLevel = options.vocabularyLevel || 'natural';
    const maxPerCategory = options.maxPerCategory || 5;

    // Step 4: Extract candidates across all related synsets for this sense and categorize
    const categoryMap: {
      similar: Set<string>;
      stronger: Set<string>;
      simpler: Set<string>;
      formal: Set<string>;
    } = {
      similar: new Set(),
      stronger: new Set(),
      simpler: new Set(),
      formal: new Set()
    };

    const allCandidates: RankedSynonym[] = [];
    const antonymsSet = new Set<string>();

    for (const synset of allSynsets) {
      const synsetCat: SynonymCategory = synset.category || 'similar';
      const synsetLevel: VocabularyLevel = synset.level || 'natural';

      if (synset.antonyms) {
        synset.antonyms.forEach((a: string) => antonymsSet.add(a));
      }

      for (const candidate of synset.lemmas) {
        if (candidate.toLowerCase() === cleanWord.toLowerCase() || candidate.toLowerCase() === lemma.toLowerCase()) {
          continue; // Skip the word itself
        }

        const score = scoreCandidate(candidate, synsetCat, synsetLevel, preferredLevel);
        allCandidates.push({
          word: candidate,
          category: synsetCat,
          level: synsetLevel,
          score,
          definition: synset.definition
        });

        if (synsetCat === 'stronger') {
          categoryMap.stronger.add(candidate);
        } else if (synsetCat === 'simpler') {
          categoryMap.simpler.add(candidate);
        } else if (synsetCat === 'formal') {
          categoryMap.formal.add(candidate);
        } else {
          categoryMap.similar.add(candidate);
        }
      }
    }

    // Sort all candidates by score descending
    allCandidates.sort((a, b) => b.score - a.score);

    const resultData: CategorizedSynonyms = {
      originalWord: cleanWord,
      lemma,
      detectedPos: bestSynset.pos,
      posName: POS_NAMES[bestSynset.pos] || 'Word',
      detectedSense: bestSynset.id,
      definition: bestSynset.definition,
      examples: bestSynset.examples,
      categories: {
        similar: Array.from(categoryMap.similar).slice(0, maxPerCategory),
        stronger: Array.from(categoryMap.stronger).slice(0, maxPerCategory),
        simpler: Array.from(categoryMap.simpler).slice(0, maxPerCategory),
        formal: Array.from(categoryMap.formal).slice(0, maxPerCategory)
      },
      antonyms: Array.from(antonymsSet).slice(0, 6),
      allCandidates: allCandidates.slice(0, 15)
    };

    return {
      word: cleanWord,
      hasResults: true,
      data: resultData
    };
  }
}

export const synonymEngine = new SynonymEngine();
