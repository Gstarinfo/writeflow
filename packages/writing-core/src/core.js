import { createDocumentModel } from '@writeflow/document-model';
import { grammarEngine } from '@writeflow/grammar-engine';
import { synonymEngine } from '@writeflow/synonym-engine';
import { PersonalDictionaryManager } from './dictionary.js';
import { IgnoreManager } from './ignore.js';
const STORAGE_KEY_PREFS = 'writeflow_preferences';
const DEFAULT_PREFS = {
    vocabularyLevel: 'natural',
    minConfidence: 0.60,
    autoCheck: true,
    debounceMs: 250,
    theme: 'dark'
};
export class WritingCoreManager {
    engines = new Map();
    dictionary;
    ignoreManager;
    grammar;
    synonyms;
    currentDoc;
    currentSuggestions = [];
    preferences = { ...DEFAULT_PREFS };
    events = {};
    debounceTimer = null;
    isBusy = false;
    constructor(events = {}) {
        this.events = events;
        this.dictionary = new PersonalDictionaryManager();
        this.ignoreManager = new IgnoreManager();
        this.grammar = grammarEngine;
        this.synonyms = synonymEngine;
        this.currentDoc = createDocumentModel('');
        this.loadPreferences();
        this.registerEngine(this.grammar);
        this.dictionary.subscribe(() => {
            // Re-run analysis when dictionary changes
            this.analyzeNow();
        });
    }
    loadPreferences() {
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                const saved = localStorage.getItem(STORAGE_KEY_PREFS);
                if (saved) {
                    this.preferences = { ...DEFAULT_PREFS, ...JSON.parse(saved) };
                }
            }
        }
        catch (e) {
            console.warn('[WriteFlow] Could not load preferences', e);
        }
    }
    savePreferences(prefs) {
        this.preferences = { ...this.preferences, ...prefs };
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify(this.preferences));
            }
        }
        catch (e) {
            console.warn('[WriteFlow] Could not save preferences', e);
        }
        this.events.onPreferencesUpdated?.(this.preferences);
        this.analyzeNow();
    }
    getPreferences() {
        return { ...this.preferences };
    }
    registerEngine(engine) {
        this.engines.set(engine.id, engine);
    }
    setDocument(doc) {
        this.currentDoc = doc;
        if (this.preferences.autoCheck) {
            this.scheduleAnalysis();
        }
    }
    updateText(text) {
        this.currentDoc = createDocumentModel(text, this.currentDoc.id, this.currentDoc.language);
        if (this.preferences.autoCheck) {
            this.scheduleAnalysis();
        }
    }
    scheduleAnalysis() {
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
        }
        this.debounceTimer = setTimeout(() => {
            this.analyzeNow();
        }, this.preferences.debounceMs);
    }
    analyzeNow() {
        this.setBusy(true);
        const start = performance.now();
        const ignoredRules = this.ignoreManager.getIgnoredRules();
        const ignoredWords = this.ignoreManager.getIgnoredWords();
        const personalDict = this.dictionary.getSet();
        const suggestions = [];
        for (const engine of this.engines.values()) {
            const results = engine.analyze(this.currentDoc);
            suggestions.push(...results);
        }
        // Filter using grammar engine options (dictionary & ignore lists)
        const filtered = this.grammar.analyze(this.currentDoc, {
            minConfidence: this.preferences.minConfidence,
            ignoredRuleIds: ignoredRules,
            ignoredWords: ignoredWords,
            personalDictionary: personalDict
        });
        this.currentSuggestions = filtered;
        this.setBusy(false);
        const elapsed = Math.round(performance.now() - start);
        // Notify
        this.events.onSuggestionsUpdated?.(filtered);
        return filtered;
    }
    getSuggestions() {
        return this.currentSuggestions;
    }
    getDocument() {
        return this.currentDoc;
    }
    applySuggestion(suggestionId, customReplacement) {
        const sugg = this.currentSuggestions.find(s => s.id === suggestionId);
        if (!sugg) {
            return { newText: this.currentDoc.rawText, success: false };
        }
        const replacement = customReplacement !== undefined ? customReplacement : sugg.replacement;
        const originalText = this.currentDoc.rawText;
        const before = originalText.slice(0, sugg.start);
        const after = originalText.slice(sugg.end);
        const newText = before + replacement + after;
        this.updateText(newText);
        this.analyzeNow();
        return { newText, success: true };
    }
    ignoreSuggestion(suggestionId) {
        const sugg = this.currentSuggestions.find(s => s.id === suggestionId);
        if (sugg) {
            this.ignoreManager.ignoreWord(sugg.original);
            this.analyzeNow();
        }
    }
    ignoreRule(ruleId) {
        if (ruleId) {
            this.ignoreManager.ignoreRule(ruleId);
            this.analyzeNow();
        }
    }
    addToDictionary(word) {
        this.dictionary.add(word);
    }
    getSynonymsForWord(word, sentenceContext, options) {
        const mergedOptions = {
            vocabularyLevel: this.preferences.vocabularyLevel,
            ...options
        };
        const res = this.synonyms.getSynonyms(word, sentenceContext || '', mergedOptions);
        return res.hasResults && res.data ? res.data : null;
    }
    setBusy(busy) {
        if (this.isBusy !== busy) {
            this.isBusy = busy;
            this.events.onBusyChanged?.(busy);
        }
    }
}
//# sourceMappingURL=core.js.map