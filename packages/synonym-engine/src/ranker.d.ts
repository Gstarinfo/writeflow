import { POS, VocabularyLevel, SynonymCategory, SynsetRecord } from '@writeflow/engine-wordnet';
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
export declare function detectPosFromContext(targetWord: string, sentenceText: string): POS;
/**
 * Disambiguates between multiple synsets using Lesk overlap scoring
 */
export declare function disambiguateSynset(synsets: SynsetRecord[], sentenceContext: string): SynsetRecord | null;
export declare function scoreCandidate(candidateWord: string, category: SynonymCategory, level: VocabularyLevel, preferredLevel?: VocabularyLevel): number;
//# sourceMappingURL=ranker.d.ts.map