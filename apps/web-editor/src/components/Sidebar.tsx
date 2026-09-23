import React, { useState } from 'react';
import { Suggestion } from '@writeflow/suggestion-system';
import { CategorizedSynonyms } from '@writeflow/synonym-engine';
import { VocabularyLevel } from '@writeflow/engine-wordnet';
import { EditorStats } from '@writeflow/editor';
import { SuggestionCard } from './SuggestionCard';
import { SynonymPopover } from './SynonymPopover';
import {
  Sparkles,
  BookOpen,
  BookMarked,
  BarChart2,
  CheckCircle2,
  Search,
  Plus,
  Trash2,
  Download,
  Upload,
  Layers,
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  activeTab: 'writing' | 'synonyms' | 'dictionary' | 'stats';
  setActiveTab: (tab: 'writing' | 'synonyms' | 'dictionary' | 'stats') => void;
  fullText: string;
  suggestions: Suggestion[];
  onApplySuggestion: (id: string, replacement?: string) => void;
  onIgnoreSuggestion: (id: string) => void;
  onIgnoreRule: (ruleId: string) => void;
  onAddToDictionary: (word: string) => void;
  dictionaryWords: string[];
  onRemoveFromDictionary: (word: string) => void;
  onImportDictionary: (json: string) => void;
  onExportDictionary: () => void;
  stats: EditorStats;
  inspectedWordData: CategorizedSynonyms | null;
  onSearchSynonyms: (word: string) => void;
  vocabLevel: VocabularyLevel;
  onSelectVocabLevel: (lvl: VocabularyLevel) => void;
  onApplySynonymWord: (replacement: string) => void;
  hoveredSuggestionId?: string | null;
  setHoveredSuggestionId: (id: string | null) => void;
  selectedSuggestionId?: string | null;
  setSelectedSuggestionId: (id: string | null) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  fullText,
  suggestions,
  onApplySuggestion,
  onIgnoreSuggestion,
  onIgnoreRule,
  onAddToDictionary,
  dictionaryWords,
  onRemoveFromDictionary,
  onImportDictionary,
  onExportDictionary,
  stats,
  inspectedWordData,
  onSearchSynonyms,
  vocabLevel,
  onSelectVocabLevel,
  onApplySynonymWord,
  hoveredSuggestionId,
  setHoveredSuggestionId,
  selectedSuggestionId,
  setSelectedSuggestionId
}) => {
  const [synonymSearchQuery, setSynonymSearchQuery] = useState('');
  const [dictSearchQuery, setDictSearchQuery] = useState('');
  const [newDictWord, setNewDictWord] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredSuggestions = suggestions.filter(s => {
    if (filterType === 'all') return true;
    return s.type === filterType;
  });

  const filteredDictionary = dictionaryWords.filter(w =>
    w.toLowerCase().includes(dictSearchQuery.toLowerCase())
  );

  const handleAddDictWord = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDictWord.trim()) {
      onAddToDictionary(newDictWord.trim());
      setNewDictWord('');
    }
  };

  const handleSynonymSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (synonymSearchQuery.trim()) {
      onSearchSynonyms(synonymSearchQuery.trim());
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) {
          onImportDictionary(content);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <aside className="wf-sidebar">
      {/* Sidebar Navigation Tabs */}
      <div className="wf-sidebar-tabs">
        <button
          className={`wf-sidebar-tab-btn ${activeTab === 'writing' ? 'active' : ''}`}
          onClick={() => setActiveTab('writing')}
        >
          <Sparkles size={14} />
          <span>Corrections ({suggestions.length})</span>
        </button>
        <button
          className={`wf-sidebar-tab-btn ${activeTab === 'synonyms' ? 'active' : ''}`}
          onClick={() => setActiveTab('synonyms')}
        >
          <BookOpen size={14} />
          <span>Synonyms</span>
        </button>
        <button
          className={`wf-sidebar-tab-btn ${activeTab === 'dictionary' ? 'active' : ''}`}
          onClick={() => setActiveTab('dictionary')}
        >
          <BookMarked size={14} />
          <span>Dictionary</span>
        </button>
        <button
          className={`wf-sidebar-tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          <BarChart2 size={14} />
          <span>Stats</span>
        </button>
      </div>

      <div className="wf-sidebar-content">
        {/* WRITING / SUGGESTIONS TAB */}
        {activeTab === 'writing' && (
          <div className="wf-tab-panel animate-fade-in">
            <div className="wf-panel-header">
              <div className="wf-panel-title-row">
                <h3 className="wf-panel-title">Corrections & Explanations</h3>
                <span className="wf-panel-counter">{suggestions.length} issues</span>
              </div>
              <p className="wf-panel-subtitle">
                Hover or click any card to locate and highlight its exact sentence in your text.
              </p>

              <div className="wf-filter-chips">
                <button
                  className={`wf-filter-chip ${filterType === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterType('all')}
                >
                  All ({suggestions.length})
                </button>
                <button
                  className={`wf-filter-chip ${filterType === 'grammar' ? 'active' : ''}`}
                  onClick={() => setFilterType('grammar')}
                >
                  Grammar
                </button>
                <button
                  className={`wf-filter-chip ${filterType === 'spelling' ? 'active' : ''}`}
                  onClick={() => setFilterType('spelling')}
                >
                  Spelling
                </button>
                <button
                  className={`wf-filter-chip ${filterType === 'punctuation' ? 'active' : ''}`}
                  onClick={() => setFilterType('punctuation')}
                >
                  Punctuation
                </button>
              </div>
            </div>

            {filteredSuggestions.length === 0 ? (
              <div className="wf-empty-state">
                <div className="wf-empty-icon">
                  <CheckCircle2 size={36} className="text-success" />
                </div>
                <h4>Writing looks great!</h4>
                <p>No grammar, spelling, or punctuation issues detected in this document.</p>
              </div>
            ) : (
              <div className="wf-suggestions-list">
                {filteredSuggestions.map((s, index) => (
                  <SuggestionCard
                    key={s.id}
                    suggestion={s}
                    fullText={fullText}
                    onApply={onApplySuggestion}
                    onIgnore={onIgnoreSuggestion}
                    onIgnoreRule={onIgnoreRule}
                    onAddToDictionary={onAddToDictionary}
                    onSelect={(sugg) => setSelectedSuggestionId(sugg.id)}
                    onHover={(id) => setHoveredSuggestionId(id)}
                    isActive={selectedSuggestionId === s.id || hoveredSuggestionId === s.id}
                    compact={false}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* SYNONYMS TAB */}
        {activeTab === 'synonyms' && (
          <div className="wf-tab-panel animate-fade-in">
            <div className="wf-panel-header">
              <h3 className="wf-panel-title">Open English WordNet Synonyms</h3>
              <p className="wf-panel-subtitle">
                Type any English word below or double-click any word in the editor to inspect contextual synonyms.
              </p>
            </div>

            <form onSubmit={handleSynonymSearchSubmit} className="wf-search-box">
              <Search size={15} className="wf-search-icon" />
              <input
                type="text"
                placeholder="Search word (e.g. write, happy, light, important)..."
                value={synonymSearchQuery}
                onChange={(e) => setSynonymSearchQuery(e.target.value)}
              />
              <button type="submit" className="wf-search-btn">
                Search
              </button>
            </form>

            {inspectedWordData ? (
              <SynonymPopover
                synonymsData={inspectedWordData}
                currentLevel={vocabLevel}
                onSelectLevel={onSelectVocabLevel}
                onReplaceWord={onApplySynonymWord}
              />
            ) : (
              <div className="wf-empty-state">
                <BookOpen size={36} className="text-muted" />
                <h4>Explore Vocabulary</h4>
                <p>Type a word in the search box above or select any word in the editor to view synonyms, definitions, and antonyms.</p>
              </div>
            )}
          </div>
        )}

        {/* PERSONAL DICTIONARY TAB */}
        {activeTab === 'dictionary' && (
          <div className="wf-tab-panel animate-fade-in">
            <div className="wf-panel-header">
              <h3 className="wf-panel-title">Personal Dictionary</h3>
              <p className="wf-panel-subtitle">Custom words won't be flagged as spelling errors.</p>
            </div>

            <form onSubmit={handleAddDictWord} className="wf-add-word-form">
              <input
                type="text"
                placeholder="Add custom word (e.g. HyperOS, Xiaomi)..."
                value={newDictWord}
                onChange={(e) => setNewDictWord(e.target.value)}
              />
              <button type="submit" className="wf-btn wf-btn-primary">
                <Plus size={14} />
                <span>Add</span>
              </button>
            </form>

            <div className="wf-dict-search-row">
              <div className="wf-search-box-sm">
                <Search size={13} />
                <input
                  type="text"
                  placeholder="Filter dictionary..."
                  value={dictSearchQuery}
                  onChange={(e) => setDictSearchQuery(e.target.value)}
                />
              </div>

              <div className="wf-dict-actions">
                <button
                  className="wf-icon-btn-sm"
                  onClick={onExportDictionary}
                  title="Export Dictionary as JSON"
                >
                  <Download size={14} />
                </button>
                <label
                  className="wf-icon-btn-sm wf-upload-label"
                  title="Import Dictionary from JSON"
                >
                  <Upload size={14} />
                  <input
                    type="file"
                    accept=".json"
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>

            <div className="wf-dictionary-list">
              {filteredDictionary.length === 0 ? (
                <div className="wf-empty-dict">
                  <p>No custom words in personal dictionary.</p>
                </div>
              ) : (
                filteredDictionary.map(word => (
                  <div key={word} className="wf-dict-item">
                    <span className="wf-dict-word">{word}</span>
                    <button
                      className="wf-dict-delete-btn"
                      onClick={() => onRemoveFromDictionary(word)}
                      title="Remove word"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* STATS & METRICS TAB */}
        {activeTab === 'stats' && (
          <div className="wf-tab-panel animate-fade-in">
            <div className="wf-panel-header">
              <h3 className="wf-panel-title">Document Analytics</h3>
            </div>

            <div className="wf-stats-grid">
              <div className="wf-stat-card">
                <span className="wf-stat-num">{stats.words}</span>
                <span className="wf-stat-label">Words</span>
              </div>
              <div className="wf-stat-card">
                <span className="wf-stat-num">{stats.characters}</span>
                <span className="wf-stat-label">Characters</span>
              </div>
              <div className="wf-stat-card">
                <span className="wf-stat-num">{stats.sentences}</span>
                <span className="wf-stat-label">Sentences</span>
              </div>
              <div className="wf-stat-card">
                <span className="wf-stat-num">{stats.paragraphs}</span>
                <span className="wf-stat-label">Paragraphs</span>
              </div>
            </div>

            <div className="wf-readability-section">
              <h4>Readability Score</h4>
              <div className="wf-readability-gauge">
                <div className="wf-gauge-header">
                  <span>Flesch Reading Ease</span>
                  <span className="wf-score-pill">{stats.readabilityScore}/100</span>
                </div>
                <div className="wf-gauge-bar">
                  <div
                    className="wf-gauge-fill"
                    style={{ width: `${Math.min(100, Math.max(5, stats.readabilityScore))}%` }}
                  />
                </div>
                <span className="wf-gauge-caption">
                  {stats.readabilityScore >= 80 ? 'Very Easy to Read' : stats.readabilityScore >= 60 ? 'Standard & Clear' : 'Complex / Academic'}
                </span>
              </div>

              <div className="wf-engine-info-card">
                <div className="wf-engine-badge-row">
                  <Layers size={14} />
                  <strong>100% Local Processing</strong>
                </div>
                <ul className="wf-engine-features">
                  <li><strong>Grammar:</strong> Linguistic analysis & nlprule ruleset</li>
                  <li><strong>Synonyms:</strong> Open English WordNet with multi-tier sense ranking</li>
                  <li><strong>Privacy:</strong> Zero cloud transmission — all data stays on device</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
