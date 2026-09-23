import { Suggestion, SuggestionSeverity } from '@writeflow/suggestion-system';
export interface TextSegment {
    text: string;
    start: number;
    end: number;
    isSuggestion: boolean;
    suggestion?: Suggestion;
    severity?: SuggestionSeverity;
}
/**
 * Splits raw text into annotated segments for inline highlights
 */
export declare function segmentTextWithSuggestions(text: string, suggestions: Suggestion[]): TextSegment[];
//# sourceMappingURL=highlight.d.ts.map