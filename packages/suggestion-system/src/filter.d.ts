import { Suggestion, SuggestionConfidenceTier } from './types.js';
export declare function getConfidenceTier(confidence: number): SuggestionConfidenceTier;
export interface FilterOptions {
    minConfidence?: number;
    ignoredRuleIds?: Set<string>;
    ignoredWords?: Set<string>;
    personalDictionary?: Set<string>;
    allowLowConfidence?: boolean;
}
export declare function filterSuggestions(suggestions: Suggestion[], options?: FilterOptions): Suggestion[];
export declare function sortSuggestions(suggestions: Suggestion[]): Suggestion[];
//# sourceMappingURL=filter.d.ts.map