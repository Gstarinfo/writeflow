import { DocumentModel } from '@writeflow/document-model';
import { Suggestion } from '@writeflow/suggestion-system';
import { GrammarEngine } from '@writeflow/grammar-engine';
import { SynonymEngine, SynonymOptions, CategorizedSynonyms } from '@writeflow/synonym-engine';
import { PersonalDictionaryManager } from './dictionary.js';
import { IgnoreManager } from './ignore.js';
import { WritingEngine, WritingPreferences, WritingCoreEvents } from './types.js';
export declare class WritingCoreManager {
    private engines;
    dictionary: PersonalDictionaryManager;
    ignoreManager: IgnoreManager;
    grammar: GrammarEngine;
    synonyms: SynonymEngine;
    private currentDoc;
    private currentSuggestions;
    private preferences;
    private events;
    private debounceTimer;
    private isBusy;
    constructor(events?: WritingCoreEvents);
    private loadPreferences;
    savePreferences(prefs: Partial<WritingPreferences>): void;
    getPreferences(): WritingPreferences;
    registerEngine(engine: WritingEngine): void;
    setDocument(doc: DocumentModel): void;
    updateText(text: string): void;
    scheduleAnalysis(): void;
    analyzeNow(): Suggestion[];
    getSuggestions(): Suggestion[];
    getDocument(): DocumentModel;
    applySuggestion(suggestionId: string, customReplacement?: string): {
        newText: string;
        success: boolean;
    };
    ignoreSuggestion(suggestionId: string): void;
    ignoreRule(ruleId: string): void;
    addToDictionary(word: string): void;
    getSynonymsForWord(word: string, sentenceContext?: string, options?: SynonymOptions): CategorizedSynonyms | null;
    private setBusy;
}
//# sourceMappingURL=core.d.ts.map