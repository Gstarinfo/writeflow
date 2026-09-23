import { DocumentModel, createDocumentModel } from '@writeflow/document-model';
import { Suggestion } from '@writeflow/suggestion-system';
import { GrammarEngine, grammarEngine } from '@writeflow/grammar-engine';
import { SynonymEngine, synonymEngine, SynonymOptions, CategorizedSynonyms } from '@writeflow/synonym-engine';
import { PersonalDictionaryManager } from './dictionary.js';
import { IgnoreManager } from './ignore.js';
import { WritingEngine, WritingPreferences, WritingCoreEvents } from './types.js';

const STORAGE_KEY_PREFS = 'writeflow_preferences';

const DEFAULT_PREFS: WritingPreferences = {
  vocabularyLevel: 'natural',
  minConfidence: 0.60,
  autoCheck: true,
  debounceMs: 250,
  theme: 'dark'
};

export class WritingCoreManager {
  private engines: Map<string, WritingEngine> = new Map();
  public dictionary: PersonalDictionaryManager;
  public ignoreManager: IgnoreManager;
  public grammar: GrammarEngine;
  public synonyms: SynonymEngine;

  private currentDoc: DocumentModel;
  private currentSuggestions: Suggestion[] = [];
  private preferences: WritingPreferences = { ...DEFAULT_PREFS };
  private events: WritingCoreEvents = {};
  private debounceTimer: any = null;
  private isBusy: boolean = false;

  constructor(events: WritingCoreEvents = {}) {
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

  private loadPreferences(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem(STORAGE_KEY_PREFS);
        if (saved) {
          this.preferences = { ...DEFAULT_PREFS, ...JSON.parse(saved) };
        }
      }
    } catch (e) {
      console.warn('[WriteFlow] Could not load preferences', e);
    }
  }

  public savePreferences(prefs: Partial<WritingPreferences>): void {
    this.preferences = { ...this.preferences, ...prefs };
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify(this.preferences));
      }
    } catch (e) {
      console.warn('[WriteFlow] Could not save preferences', e);
    }
    this.events.onPreferencesUpdated?.(this.preferences);
    this.analyzeNow();
  }

  public getPreferences(): WritingPreferences {
    return { ...this.preferences };
  }

  public registerEngine(engine: WritingEngine): void {
    this.engines.set(engine.id, engine);
  }

  public setDocument(doc: DocumentModel): void {
    this.currentDoc = doc;
    if (this.preferences.autoCheck) {
      this.scheduleAnalysis();
    }
  }

  public updateText(text: string): void {
    this.currentDoc = createDocumentModel(text, this.currentDoc.id, this.currentDoc.language);
    if (this.preferences.autoCheck) {
      this.scheduleAnalysis();
    }
  }

  public scheduleAnalysis(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(() => {
      this.analyzeNow();
    }, this.preferences.debounceMs);
  }

  public analyzeNow(): Suggestion[] {
    this.setBusy(true);
    const start = performance.now();

    const ignoredRules = this.ignoreManager.getIgnoredRules();
    const ignoredWords = this.ignoreManager.getIgnoredWords();
    const personalDict = this.dictionary.getSet();

    const suggestions: Suggestion[] = [];

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

  public getSuggestions(): Suggestion[] {
    return this.currentSuggestions;
  }

  public getDocument(): DocumentModel {
    return this.currentDoc;
  }

  public applySuggestion(suggestionId: string, customReplacement?: string): { newText: string; success: boolean } {
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

  public ignoreSuggestion(suggestionId: string): void {
    const sugg = this.currentSuggestions.find(s => s.id === suggestionId);
    if (sugg) {
      this.ignoreManager.ignoreWord(sugg.original);
      this.analyzeNow();
    }
  }

  public ignoreRule(ruleId: string): void {
    if (ruleId) {
      this.ignoreManager.ignoreRule(ruleId);
      this.analyzeNow();
    }
  }

  public addToDictionary(word: string): void {
    this.dictionary.add(word);
  }

  public getSynonymsForWord(
    word: string,
    sentenceContext?: string,
    options?: SynonymOptions
  ): CategorizedSynonyms | null {
    const mergedOptions: SynonymOptions = {
      vocabularyLevel: this.preferences.vocabularyLevel,
      ...options
    };
    const res = this.synonyms.getSynonyms(word, sentenceContext || '', mergedOptions);
    return res.hasResults && res.data ? res.data : null;
  }

  private setBusy(busy: boolean): void {
    if (this.isBusy !== busy) {
      this.isBusy = busy;
      this.events.onBusyChanged?.(busy);
    }
  }
}
