export interface EditorStats {
  characters: number;
  charactersWithoutSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  readingTimeMinutes: number;
  readabilityScore: number; // 0-100 Flesch Reading Ease estimate
}

export function calculateEditorStats(text: string): EditorStats {
  const characters = text.length;
  const charactersWithoutSpaces = text.replace(/\s/g, '').length;
  const wordsArray = text.trim().split(/\s+/).filter(w => w.length > 0);
  const words = wordsArray.length;

  const sentencesArray = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const sentences = sentencesArray.length || (words > 0 ? 1 : 0);

  const paragraphsArray = text.split(/\r?\n/).filter(p => p.trim().length > 0);
  const paragraphs = paragraphsArray.length || (words > 0 ? 1 : 0);

  // Approximate 200 words per minute
  const readingTimeMinutes = Math.max(1, Math.ceil(words / 200));

  // Approximate syllables for Flesch score
  let syllableCount = 0;
  for (const word of wordsArray) {
    const clean = word.toLowerCase().replace(/[^a-z]/g, '');
    if (clean.length <= 3) {
      syllableCount += 1;
    } else {
      const matches = clean.match(/[aeiouy]{1,2}/g);
      syllableCount += matches ? matches.length : 1;
    }
  }

  // Flesch Reading Ease formula: 206.835 - 1.015*(words/sentences) - 84.6*(syllables/words)
  let readabilityScore = 100;
  if (words > 0 && sentences > 0) {
    const score = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllableCount / words);
    readabilityScore = Math.min(100, Math.max(0, Math.round(score)));
  }

  return {
    characters,
    charactersWithoutSpaces,
    words,
    sentences,
    paragraphs,
    readingTimeMinutes,
    readabilityScore
  };
}
