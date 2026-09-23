/**
 * Splits raw text into annotated segments for inline highlights
 */
export function segmentTextWithSuggestions(text, suggestions) {
    if (!text)
        return [];
    if (!suggestions || suggestions.length === 0) {
        return [{ text, start: 0, end: text.length, isSuggestion: false }];
    }
    // Filter out any suggestions outside boundary and sort by start
    const valid = suggestions
        .filter(s => s.start >= 0 && s.end <= text.length && s.start < s.end)
        .sort((a, b) => a.start - b.start);
    const segments = [];
    let currentOffset = 0;
    for (const sugg of valid) {
        // If there's non-suggestion text before this suggestion
        if (sugg.start > currentOffset) {
            segments.push({
                text: text.slice(currentOffset, sugg.start),
                start: currentOffset,
                end: sugg.start,
                isSuggestion: false
            });
            currentOffset = sugg.start;
        }
        // If suggestion starts after current offset (handling non-overlapping correctly)
        if (sugg.start >= currentOffset && sugg.end <= text.length) {
            segments.push({
                text: text.slice(sugg.start, sugg.end),
                start: sugg.start,
                end: sugg.end,
                isSuggestion: true,
                suggestion: sugg,
                severity: sugg.severity
            });
            currentOffset = sugg.end;
        }
    }
    // Trailing segment
    if (currentOffset < text.length) {
        segments.push({
            text: text.slice(currentOffset),
            start: currentOffset,
            end: text.length,
            isSuggestion: false
        });
    }
    return segments;
}
//# sourceMappingURL=highlight.js.map