export type SuggestionEngine = 'grammar' | 'synonym' | 'paraphrase' | 'seo';

export type SuggestionType = 'grammar' | 'spelling' | 'punctuation' | 'synonym' | 'style';

export type SuggestionSeverity = 'error' | 'warning' | 'improvement' | 'info';

export type SuggestionConfidenceTier = 'high' | 'medium' | 'low' | 'hidden';

export interface Suggestion {
  id: string;
  engine: SuggestionEngine;
  type: SuggestionType;
  category: string;
  start: number; // document character offset
  end: number;   // document character offset
  original: string;
  replacement: string;
  replacements?: string[];
  confidence: number; // 0.00 to 1.00
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
