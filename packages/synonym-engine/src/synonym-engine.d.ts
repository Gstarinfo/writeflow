import { SynonymOptions, CategorizedSynonyms } from './ranker.js';
export interface SynonymSuggestionResult {
    word: string;
    hasResults: boolean;
    data?: CategorizedSynonyms;
}
export declare class SynonymEngine {
    getSynonyms(word: string, sentenceContext?: string, options?: SynonymOptions): SynonymSuggestionResult;
}
export declare const synonymEngine: SynonymEngine;
//# sourceMappingURL=synonym-engine.d.ts.map