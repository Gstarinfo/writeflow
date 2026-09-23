import { splitSentences } from './tokenizer.js';
let docIdCounter = 0;
export function createDocumentModel(rawText = '', id = `doc_${Date.now()}_${++docIdCounter}`, language = 'en', selection = { start: 0, end: 0 }) {
    const paragraphs = [];
    const allSentences = [];
    // Split by newline sequences (\r\n, \r, \n)
    const paragraphLines = rawText.split(/\r?\n/);
    let currentOffset = 0;
    paragraphLines.forEach((line, idx) => {
        const pId = `p_${idx + 1}`;
        const pStart = currentOffset;
        const pEnd = pStart + line.length;
        const sentences = splitSentences(line, pStart, pId);
        const sentenceIds = sentences.map(s => s.id);
        allSentences.push(...sentences);
        paragraphs.push({
            id: pId,
            start: pStart,
            end: pEnd,
            text: line,
            sentenceIds,
            index: idx
        });
        // Add 1 for the newline character offset (or 2 for \r\n if original had \r\n)
        currentOffset = pEnd + 1;
    });
    return {
        id,
        language,
        rawText,
        paragraphs,
        sentences: allSentences,
        selection,
        updatedAt: Date.now()
    };
}
export function updateDocumentModel(doc, newText, selection) {
    return createDocumentModel(newText, doc.id, doc.language, selection ?? doc.selection);
}
export function getWordAtOffset(doc, offset) {
    for (const sentence of doc.sentences) {
        if (offset >= sentence.start && offset <= sentence.end) {
            for (const token of sentence.tokens) {
                if (token.isWord && offset >= token.start && offset <= token.end) {
                    return token;
                }
            }
        }
    }
    return null;
}
export function getSentenceAtOffset(doc, offset) {
    for (const sentence of doc.sentences) {
        if (offset >= sentence.start && offset <= sentence.end) {
            return sentence;
        }
    }
    return null;
}
//# sourceMappingURL=document.js.map