import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { WritingCoreManager } from '@writeflow/writing-core';
import { calculateEditorStats } from '@writeflow/editor';
import { Suggestion } from '@writeflow/suggestion-system';
import { CategorizedSynonyms } from '@writeflow/synonym-engine';
import { VocabularyLevel } from '@writeflow/engine-wordnet';

import { Header } from './components/Header';
import { Toolbar } from './components/Toolbar';
import { EditorArea } from './components/EditorArea';
import { Sidebar } from './components/Sidebar';
import './App.css';

const SAMPLE_TEXT = `He go to school every day. The bag is light, but please turn on the light in the room.

I could of told you earlier, but I did not have many informations. However the new method is more better and very effective.

We want to improve our writing and create something important.`;

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeTab, setActiveTab] = useState<'writing' | 'synonyms' | 'dictionary' | 'stats'>('writing');
  const [text, setText] = useState<string>(SAMPLE_TEXT);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [dictionaryWords, setDictionaryWords] = useState<string[]>([]);
  const [vocabLevel, setVocabLevel] = useState<VocabularyLevel>('natural');
  const [inspectedWordData, setInspectedWordData] = useState<CategorizedSynonyms | null>(null);

  const [hoveredSuggestionId, setHoveredSuggestionId] = useState<string | null>(null);
  const [selectedSuggestionId, setSelectedSuggestionId] = useState<string | null>(null);

  // Initialize WritingCoreManager
  const core = useMemo(() => {
    return new WritingCoreManager({
      onSuggestionsUpdated: (newSuggestions) => {
        setSuggestions(newSuggestions);
      },
      onBusyChanged: (busy) => {
        setIsBusy(busy);
      },
      onDictionaryUpdated: (words) => {
        setDictionaryWords(words);
      }
    });
  }, []);

  // Sync initial state
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    setDictionaryWords(core.dictionary.getAll());
    core.updateText(text);
    core.analyzeNow();
  }, [core]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    core.savePreferences({ theme: next });
  };

  const handleTextChange = useCallback((newText: string) => {
    setText(newText);
    core.updateText(newText);
  }, [core]);

  const handleApplySuggestion = useCallback((id: string, customRep?: string) => {
    const res = core.applySuggestion(id, customRep);
    if (res.success) {
      setText(res.newText);
      setSelectedSuggestionId(null);
      setHoveredSuggestionId(null);
    }
  }, [core]);

  const handleIgnoreSuggestion = useCallback((id: string) => {
    core.ignoreSuggestion(id);
    setSelectedSuggestionId(null);
  }, [core]);

  const handleIgnoreRule = useCallback((ruleId: string) => {
    core.ignoreRule(ruleId);
    setSelectedSuggestionId(null);
  }, [core]);

  const handleAddToDictionary = useCallback((word: string) => {
    core.addToDictionary(word);
    setDictionaryWords(core.dictionary.getAll());
  }, [core]);

  const handleRemoveFromDictionary = useCallback((word: string) => {
    core.dictionary.remove(word);
    setDictionaryWords(core.dictionary.getAll());
    core.analyzeNow();
  }, [core]);

  const handleImportDictionary = useCallback((jsonStr: string) => {
    const count = core.dictionary.importJson(jsonStr);
    alert(`Imported ${count} words to personal dictionary.`);
    setDictionaryWords(core.dictionary.getAll());
    core.analyzeNow();
  }, [core]);

  const handleExportDictionary = useCallback(() => {
    const data = core.dictionary.exportJson();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'writeflow-dictionary.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [core]);

  const handleGetSynonyms = useCallback((word: string, context?: string): CategorizedSynonyms | null => {
    return core.getSynonymsForWord(word, context, { vocabularyLevel: vocabLevel });
  }, [core, vocabLevel]);

  const handleInspectWord = useCallback((word: string, context?: string) => {
    const syns = core.getSynonymsForWord(word, context, { vocabularyLevel: vocabLevel });
    setInspectedWordData(syns);
  }, [core, vocabLevel]);

  const handleSearchSynonyms = useCallback((word: string) => {
    const clean = word.trim();
    if (!clean) return;
    const syns = core.getSynonymsForWord(clean, text, { vocabularyLevel: vocabLevel });
    setInspectedWordData(syns);
    setActiveTab('synonyms');
  }, [core, text, vocabLevel]);

  const handleSelectVocabLevel = (lvl: VocabularyLevel) => {
    setVocabLevel(lvl);
    core.savePreferences({ vocabularyLevel: lvl });
    if (inspectedWordData) {
      const updated = core.getSynonymsForWord(inspectedWordData.originalWord, text, { vocabularyLevel: lvl });
      setInspectedWordData(updated);
    }
  };

  const handleApplySynonymWord = (replacement: string) => {
    if (!inspectedWordData) return;
    const regex = new RegExp(`\\b${inspectedWordData.originalWord}\\b`, 'i');
    const newText = text.replace(regex, replacement);
    setText(newText);
    core.updateText(newText);
  };

  const stats = useMemo(() => {
    return calculateEditorStats(text);
  }, [text]);

  const handleFormat = (command: string) => {
    document.execCommand(command, false);
  };

  const handleUndo = () => {
    document.execCommand('undo', false);
  };

  const handleRedo = () => {
    document.execCommand('redo', false);
  };

  const handleInsertSample = () => {
    setText(SAMPLE_TEXT);
    core.updateText(SAMPLE_TEXT);
    core.analyzeNow();
  };

  const handleClear = () => {
    if (window.confirm('Clear all text from document?')) {
      setText('');
      core.updateText('');
    }
  };

  return (
    <div className="wf-app">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        suggestionsCount={suggestions.length}
      />

      <div className="wf-main-layout">
        <main className="wf-editor-pane">
          <Toolbar
            onFormat={handleFormat}
            onUndo={handleUndo}
            onRedo={handleRedo}
            onInsertSample={handleInsertSample}
            onClear={handleClear}
          />

          <EditorArea
            text={text}
            onChangeText={handleTextChange}
            suggestions={suggestions}
            onApplySuggestion={handleApplySuggestion}
            onIgnoreSuggestion={handleIgnoreSuggestion}
            onIgnoreRule={handleIgnoreRule}
            onAddToDictionary={handleAddToDictionary}
            stats={stats}
            isBusy={isBusy}
            onGetSynonyms={handleGetSynonyms}
            vocabLevel={vocabLevel}
            onSelectVocabLevel={handleSelectVocabLevel}
            onInspectWord={handleInspectWord}
            hoveredSuggestionId={hoveredSuggestionId}
            selectedSuggestionId={selectedSuggestionId}
            onSelectSuggestion={(sugg) => setSelectedSuggestionId(sugg ? sugg.id : null)}
          />
        </main>

        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          fullText={text}
          suggestions={suggestions}
          onApplySuggestion={handleApplySuggestion}
          onIgnoreSuggestion={handleIgnoreSuggestion}
          onIgnoreRule={handleIgnoreRule}
          onAddToDictionary={handleAddToDictionary}
          dictionaryWords={dictionaryWords}
          onRemoveFromDictionary={handleRemoveFromDictionary}
          onImportDictionary={handleImportDictionary}
          onExportDictionary={handleExportDictionary}
          stats={stats}
          inspectedWordData={inspectedWordData}
          onSearchSynonyms={handleSearchSynonyms}
          vocabLevel={vocabLevel}
          onSelectVocabLevel={handleSelectVocabLevel}
          onApplySynonymWord={handleApplySynonymWord}
          hoveredSuggestionId={hoveredSuggestionId}
          setHoveredSuggestionId={setHoveredSuggestionId}
          selectedSuggestionId={selectedSuggestionId}
          setSelectedSuggestionId={setSelectedSuggestionId}
        />
      </div>
    </div>
  );
};
