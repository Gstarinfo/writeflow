export interface EditorStats {
    characters: number;
    charactersWithoutSpaces: number;
    words: number;
    sentences: number;
    paragraphs: number;
    readingTimeMinutes: number;
    readabilityScore: number;
}
export declare function calculateEditorStats(text: string): EditorStats;
//# sourceMappingURL=stats.d.ts.map