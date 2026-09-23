export type POS = 'n' | 'v' | 'a' | 'r';
export type VocabularyLevel = 'simple' | 'natural' | 'professional' | 'academic' | 'advanced';
export type SynonymCategory = 'similar' | 'stronger' | 'simpler' | 'formal' | 'informal';
export interface SynsetRecord {
    id: string;
    pos: POS;
    definition: string;
    examples?: string[];
    lemmas: string[];
    antonyms?: string[];
    hypernyms?: string[];
    level?: VocabularyLevel;
    category?: SynonymCategory;
}
export interface WordEntry {
    lemma: string;
    pos: POS;
    synsets: SynsetRecord[];
    frequencyRank?: number;
}
//# sourceMappingURL=types.d.ts.map