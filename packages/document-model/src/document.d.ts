import { DocumentModel, Sentence, Token, SelectionRange } from './types.js';
export declare function createDocumentModel(rawText?: string, id?: string, language?: string, selection?: SelectionRange): DocumentModel;
export declare function updateDocumentModel(doc: DocumentModel, newText: string, selection?: SelectionRange): DocumentModel;
export declare function getWordAtOffset(doc: DocumentModel, offset: number): Token | null;
export declare function getSentenceAtOffset(doc: DocumentModel, offset: number): Sentence | null;
//# sourceMappingURL=document.d.ts.map