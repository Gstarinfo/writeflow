import { filterSuggestions, sortSuggestions } from '@writeflow/suggestion-system';
import { nlpRuleEngine } from '@writeflow/engine-nlprule';
export class GrammarEngine {
    id = 'grammar';
    version = '1.0.0';
    /**
     * Analyzes a DocumentModel and produces a sorted, filtered list of grammar/spelling suggestions
     */
    analyze(doc, options = {}) {
        const rawSuggestions = nlpRuleEngine.checkDocument(doc);
        // Apply feature toggles if specified
        const filteredByFeature = rawSuggestions.filter(s => {
            if (options.enableSpelling === false && s.type === 'spelling')
                return false;
            if (options.enablePunctuation === false && s.type === 'punctuation')
                return false;
            if (options.enableGrammar === false && s.type === 'grammar')
                return false;
            return true;
        });
        // Apply confidence, ignored rules, personal dictionary
        const processed = filterSuggestions(filteredByFeature, options);
        return sortSuggestions(processed);
    }
}
export const grammarEngine = new GrammarEngine();
//# sourceMappingURL=grammar-engine.js.map