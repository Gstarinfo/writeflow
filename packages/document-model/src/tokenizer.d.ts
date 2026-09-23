import { Token, Sentence } from './types.js';
/**
 * Tokenizes text into words, punctuation, and whitespace tokens with accurate offsets
 */
export declare function tokenizeText(text: string, baseOffset?: number): Token[];
/**
 * Splits text into sentences handling abbreviations, decimals, and quotes
 */
export declare function splitSentences(paragraphText: string, paragraphOffset: number, paragraphId: string): Sentence[];
//# sourceMappingURL=tokenizer.d.ts.map