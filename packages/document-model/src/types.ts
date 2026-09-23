export interface Token {
  text: string;
  start: number; // document character offset
  end: number;   // document character offset
  pos?: string;  // Part of speech (e.g. NN, VB, JJ, RB, DT, PRP)
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
