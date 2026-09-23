export type SuggestionEngine = 'grammar' | 'synonym' | 'paraphrase' | 'seo';
export type SuggestionType = 'grammar' | 'spelling' | 'punctuation' | 'synonym' | 'style';
export type SuggestionSeverity = 'error' | 'warning' | 'improvement' | 'info';
export type SuggestionConfidenceTier = 'high' | 'medium' | 'low' | 'hidden';
export interface Suggestion {
    id: string;
    engine: SuggestionEngine;
    type: SuggestionType;
    category: string;
    start: number;
    end: number;
    original: string;
    replacement: string;
    replacements?: string[];
    confidence: number;
    severity: SuggestionSeverity;
    explanation: string;
    ruleId?: string;
    context?: string;
    data?: Record<string, any>;
}
export interface SuggestionAction {
    type: 'apply' | 'ignore' | 'ignore_rule' | 'add_dictionary';
    suggestionId: string;
    replacementIndex?: number;
}
//# sourceMappingURL=types.d.ts.map