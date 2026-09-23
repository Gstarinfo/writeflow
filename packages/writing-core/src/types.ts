import { DocumentModel } from '@writeflow/document-model';
import { Suggestion } from '@writeflow/suggestion-system';
import { SynonymOptions, CategorizedSynonyms } from '@writeflow/synonym-engine';
import { VocabularyLevel } from '@writeflow/engine-wordnet';

export interface WritingEngine {
  id: string;
  version: string;
  analyze(document: DocumentModel): Suggestion[];
}

export interface WritingPreferences {
  vocabularyLevel: VocabularyLevel;
  minConfidence: number;
  autoCheck: boolean;
  debounceMs: number;
  theme: 'dark' | 'light';
}

export interface WritingCoreEvents {
  onSuggestionsUpdated?: (suggestions: Suggestion[]) => void;
  onDictionaryUpdated?: (words: string[]) => void;
  onPreferencesUpdated?: (prefs: WritingPreferences) => void;
  onBusyChanged?: (isBusy: boolean) => void;
}
