export interface Token {
    text: string;
    start: number;
    end: number;
    pos?: string;
    lemma?: string;
    isWord: boolean;
    isPunctuation: boolean;
    index: number;
}
export interface Sentence {
    id: string;
    paragraphId: string;
    start: number;
    end: number;
    text: string;
    tokens: Token[];
    index: number;
}
export interface Paragraph {
    id: string;
    start: number;
    end: number;
    text: string;
    sentenceIds: string[];
    index: number;
}
export interface SelectionRange {
    start: number;
    end: number;
    text?: string;
}
export interface DocumentModel {
    id: string;
    language: string;
    rawText: string;
    paragraphs: Paragraph[];
    sentences: Sentence[];
    selection: SelectionRange;
    updatedAt: number;
}
//# sourceMappingURL=types.d.ts.map