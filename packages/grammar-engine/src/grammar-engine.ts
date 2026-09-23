import { DocumentModel } from '@writeflow/document-model';
import { Suggestion, filterSuggestions, sortSuggestions, FilterOptions } from '@writeflow/suggestion-system';
import { nlpRuleEngine } from '@writeflow/engine-nlprule';

export interface GrammarEngineOptions extends FilterOptions {
  enableSpelling?: boolean;
  enablePunctuation?: boolean;
  enableGrammar?: boolean;
}

export class GrammarEngine {
  public id = 'grammar';
  public version = '1.0.0';

  /**
   * Analyzes a DocumentModel and produces a sorted, filtered list of grammar/spelling suggestions
   */
  public analyze(doc: DocumentModel, options: GrammarEngineOptions = {}): Suggestion[] {
    const customDict = options.personalDictionary;
    const rawSuggestions = nlpRuleEngine.checkDocument(doc, customDict);

    // Apply feature toggles if specified
    const filteredByFeature = rawSuggestions.filter(s => {
      if (options.enableSpelling === false && s.type === 'spelling') return false;
      if (options.enablePunctuation === false && s.type === 'punctuation') return false;
      if (options.enableGrammar === false && s.type === 'grammar') return false;
      return true;
    });

    // Apply confidence, ignored rules, personal dictionary
    const processed = filterSuggestions(filteredByFeature, options);

    return sortSuggestions(processed);
  }
}

export const grammarEngine = new GrammarEngine();
