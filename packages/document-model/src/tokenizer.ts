import { Token, Sentence, Paragraph } from './types.js';

// Common abbreviations that don't end sentences
const ABBREVIATIONS = new Set([
  'mr', 'mrs', 'ms', 'dr', 'prof', 'sr', 'jr', 'vs', 'etc', 'e.g', 'i.e', 'inc', 'ltd', 'corp', 'co', 'dept', 'approx', 'est'
]);

/**
 * Tokenizes text into words, punctuation, and whitespace tokens with accurate offsets
 */
export function tokenizeText(text: string, baseOffset: number = 0): Token[] {
  const tokens: Token[] = [];
  // Match word characters (including internal apostrophes/hyphens) or punctuation or whitespace sequences
  const regex = /([a-zA-Z0-9]+(?:['’][a-zA-Z0-9]+)?)|([^\s\w])|(\s+)/g;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = regex.exec(text)) !== null) {
    const matchedText = match[0];
    const start = baseOffset + match.index;
    const end = start + matchedText.length;

    if (match[1]) {
      // Word token
      tokens.push({
        text: matchedText,
        start,
        end,
        isWord: true,
        isPunctuation: false,
        index: index++
      });
    } else if (match[2]) {
      // Punctuation token
      tokens.push({
        text: matchedText,
        start,
        end,
        isWord: false,
        isPunctuation: true,
        index: index++
      });
    }
    // Whitespace is skipped as a token entity but offsets are tracked accurately
  }

  return tokens;
}

/**
 * Splits text into sentences handling abbreviations, decimals, and quotes
 */
export function splitSentences(paragraphText: string, paragraphOffset: number, paragraphId: string): Sentence[] {
  if (!paragraphText.trim()) {
    return [];
  }

  const sentences: Sentence[] = [];
  const len = paragraphText.length;
  let sentenceStart = 0;
  let i = 0;

  while (i < len) {
    const char = paragraphText[i];

    // Check for sentence boundary candidates: . ! ?
    if (char === '.' || char === '!' || char === '?') {
      let isBoundary = true;

      // Handle decimals e.g., 3.14
      if (char === '.' && i > 0 && i < len - 1) {
        const prevChar = paragraphText[i - 1];
        const nextChar = paragraphText[i + 1];
        if (/\d/.test(prevChar) && /\d/.test(nextChar)) {
          isBoundary = false;
        }
      }

      // Handle common abbreviations
      if (isBoundary && char === '.') {
        const wordBefore = paragraphText.slice(sentenceStart, i).split(/\s+/).pop()?.toLowerCase() || '';
        if (ABBREVIATIONS.has(wordBefore)) {
          isBoundary = false;
        }
      }

      // If followed immediately by non-space/quote, might not be a boundary
      if (isBoundary && i + 1 < len) {
        const nextChar = paragraphText[i + 1];
        // Allow quotes or closing parentheses after punctuation
        if (nextChar === '"' || nextChar === "'" || nextChar === '”' || nextChar === '’' || nextChar === ')') {
          i++; // Consume closing quote
        }
        
        // Next character should ideally be whitespace or end of string
        if (i + 1 < len && !/\s/.test(paragraphText[i + 1])) {
          isBoundary = false;
        }
      }

      if (isBoundary) {
        const sentenceEnd = i + 1;
        const textSlice = paragraphText.slice(sentenceStart, sentenceEnd);
        const trimmedLeading = textSlice.match(/^\s*/)?.[0].length || 0;
        const actualStart = sentenceStart + trimmedLeading;
        const actualText = paragraphText.slice(actualStart, sentenceEnd);

        if (actualText.trim().length > 0) {
          const startAbs = paragraphOffset + actualStart;
          const endAbs = paragraphOffset + sentenceEnd;
          const tokens = tokenizeText(actualText, startAbs);

          sentences.push({
            id: `${paragraphId}_s${sentences.length + 1}`,
            paragraphId,
            start: startAbs,
            end: endAbs,
            text: actualText,
            tokens,
            index: sentences.length
          });
        }

        sentenceStart = sentenceEnd;
      }
    }
    i++;
  }

  // Handle trailing sentence without terminating punctuation
  if (sentenceStart < len) {
    const textSlice = paragraphText.slice(sentenceStart);
    const trimmedLeading = textSlice.match(/^\s*/)?.[0].length || 0;
    const actualStart = sentenceStart + trimmedLeading;
    const actualText = paragraphText.slice(actualStart);

    if (actualText.trim().length > 0) {
      const startAbs = paragraphOffset + actualStart;
      const endAbs = paragraphOffset + len;
      const tokens = tokenizeText(actualText, startAbs);

      sentences.push({
        id: `${paragraphId}_s${sentences.length + 1}`,
        paragraphId,
        start: startAbs,
        end: endAbs,
        text: actualText,
        tokens,
        index: sentences.length
      });
    }
  }

  return sentences;
}
