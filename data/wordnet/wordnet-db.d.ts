import { WordEntry, POS } from './types.js';
export declare function lemmatizeWord(word: string): {
    lemma: string;
    posCandidate?: POS;
};
export declare const WORDNET_DATABASE: Record<string, WordEntry[]>;
//# sourceMappingURL=wordnet-db.d.ts.map