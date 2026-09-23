import { WORDNET_DATABASE, lemmatizeWord, generateFallbackWordEntry } from './wordnet-db.js';
import { WordEntry, SynsetRecord, POS, VocabularyLevel, SynonymCategory } from './types.js';

export * from './types.js';
export * from './wordnet-db.js';

export class WordNetProvider {
  /**
   * Retrieves all synset entries for a word or its lemmatized base
   */
  public getEntries(word: string): WordEntry[] {
    const { lemma } = lemmatizeWord(word);
    if (WORDNET_DATABASE[lemma]) {
      return WORDNET_DATABASE[lemma];
    }

    const fallback = generateFallbackWordEntry(lemma);
    return fallback ? [fallback] : [];
  }

  /**
   * Retrieves specific synsets for a word matching POS if provided
   */
  public getSynsets(word: string, posFilter?: POS): SynsetRecord[] {
    const entries = this.getEntries(word);
    const results: SynsetRecord[] = [];

    for (const entry of entries) {
      if (!posFilter || entry.pos === posFilter) {
        results.push(...entry.synsets);
      }
    }

    return results;
  }

  /**
   * Lemmatizes a token and gets candidates
   */
  public lemmatize(word: string) {
    return lemmatizeWord(word);
  }
}

export const wordNetProvider = new WordNetProvider();
