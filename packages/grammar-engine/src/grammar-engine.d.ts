import { DocumentModel } from '@writeflow/document-model';
import { Suggestion, FilterOptions } from '@writeflow/suggestion-system';
export interface GrammarEngineOptions extends FilterOptions {
    enableSpelling?: boolean;
    enablePunctuation?: boolean;
    enableGrammar?: boolean;
}
export declare class GrammarEngine {
    id: string;
    version: string;
    /**
     * Analyzes a DocumentModel and produces a sorted, filtered list of grammar/spelling suggestions
     */
    analyze(doc: DocumentModel, options?: GrammarEngineOptions): Suggestion[];
}
export declare const grammarEngine: GrammarEngine;
//# sourceMappingURL=grammar-engine.d.ts.map