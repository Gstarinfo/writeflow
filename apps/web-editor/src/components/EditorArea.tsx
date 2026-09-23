import React, { useState, useRef, useEffect } from 'react';
import { Suggestion } from '@writeflow/suggestion-system';
import { EditorStats, segmentTextWithSuggestions } from '@writeflow/editor';
import { SuggestionCard } from './SuggestionCard';
import { SynonymPopover } from './SynonymPopover';
import { CategorizedSynonyms } from '@writeflow/synonym-engine';
import { VocabularyLevel } from '@writeflow/engine-wordnet';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface EditorAreaProps {
  text: string;
  onChangeText: (text: string) => void;
  suggestions: Suggestion[];
  onApplySuggestion: (id: string, replacement?: string) => void;
  onIgnoreSuggestion: (id: string) => void;
  onIgnoreRule: (ruleId: string) => void;
  onAddToDictionary: (word: string) => void;
  stats: EditorStats;
  isBusy: boolean;
  onGetSynonyms: (word: string, context?: string) => CategorizedSynonyms | null;
  vocabLevel: VocabularyLevel;
  onSelectVocabLevel: (lvl: VocabularyLevel) => void;
  onInspectWord: (word: string, context?: string) => void;
  hoveredSuggestionId?: string | null;
  selectedSuggestionId?: string | null;
  onSelectSuggestion?: (sugg: Suggestion | null) => void;
}

export const EditorArea: React.FC<EditorAreaProps> = ({
  text,
  onChangeText,
  suggestions,
  onApplySuggestion,
  onIgnoreSuggestion,
  onIgnoreRule,
  onAddToDictionary,
  stats,
  isBusy,
  onGetSynonyms,
  vocabLevel,
  onSelectVocabLevel,
  onInspectWord,
  hoveredSuggestionId,
  selectedSuggestionId,
  onSelectSuggestion
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const [activeSuggestion, setActiveSuggestion] = useState<Suggestion | null>(null);
  const [synonymState, setSynonymState] = useState<{
    word: string;
    data: CategorizedSynonyms;
    selectionStart: number;
    selectionEnd: number;
  } | null>(null);

  // Sync scroll between textarea and overlay
  const handleScroll = () => {
    if (textareaRef.current && overlayRef.current) {
      overlayRef.current.scrollTop = textareaRef.current.scrollTop;
      overlayRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  // Sync selected suggestion from sidebar if changed
  useEffect(() => {
    if (selectedSuggestionId) {
      const match = suggestions.find(s => s.id === selectedSuggestionId);
      if (match) {
        setActiveSuggestion(match);
        if (textareaRef.current) {
          textareaRef.current.focus();
          textareaRef.current.setSelectionRange(match.start, match.end);
        }
      }
    }
  }, [selectedSuggestionId, suggestions]);

  // Handle textarea text change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeText(e.target.value);
    setActiveSuggestion(null);
    setSynonymState(null);
  };

  // Handle word selection / click for suggestions and synonyms
  const handleSelectOrClick = () => {
    if (!textareaRef.current) return;
    const start = textareaRef.current.selectionStart;
    const end = textareaRef.current.selectionEnd;

    // Check if cursor lands inside a grammar suggestion
    const matchSugg = suggestions.find(s => start >= s.start && start <= s.end);
    if (matchSugg) {
      setActiveSuggestion(matchSugg);
      onSelectSuggestion?.(matchSugg);
    } else {
      setActiveSuggestion(null);
      onSelectSuggestion?.(null);
    }

    // Check if a word is selected or clicked for synonyms
    if (start < end) {
      const selectedWord = text.slice(start, end).trim();
      if (selectedWord && /^[a-zA-Z]+$/.test(selectedWord)) {
        const sentenceContext = text.slice(Math.max(0, start - 50), Math.min(text.length, end + 50));
        const synData = onGetSynonyms(selectedWord, sentenceContext);
        if (synData) {
          setSynonymState({
            word: selectedWord,
            data: synData,
            selectionStart: start,
            selectionEnd: end
          });
          onInspectWord(selectedWord, sentenceContext);
          return;
        }
      }
    } else {
      // If cursor is on a word on double click
      const before = text.slice(0, start);
      const after = text.slice(start);
      const m1 = before.match(/[a-zA-Z]+$/);
      const m2 = after.match(/^[a-zA-Z]+/);
      if (m1 || m2) {
        const wordStart = start - (m1 ? m1[0].length : 0);
        const wordEnd = start + (m2 ? m2[0].length : 0);
        const currentWord = text.slice(wordStart, wordEnd).trim();
        if (currentWord) {
          const sentenceContext = text.slice(Math.max(0, wordStart - 50), Math.min(text.length, wordEnd + 50));
          const synData = onGetSynonyms(currentWord, sentenceContext);
          if (synData) {
            setSynonymState({
              word: currentWord,
              data: synData,
              selectionStart: wordStart,
              selectionEnd: wordEnd
            });
            onInspectWord(currentWord, sentenceContext);
          }
        }
      }
    }
  };

  const handleApplyReplacement = (id: string, rep?: string) => {
    onApplySuggestion(id, rep);
    setActiveSuggestion(null);
  };

  const handleApplySynonym = (replacement: string) => {
    if (!synonymState) return;
    const before = text.slice(0, synonymState.selectionStart);
    const after = text.slice(synonymState.selectionEnd);
    const nextText = before + replacement + after;
    onChangeText(nextText);
    setSynonymState(null);
  };

  // Re-fetch synonyms if vocab level changes
  useEffect(() => {
    if (synonymState) {
      const synData = onGetSynonyms(synonymState.word);
      if (synData) {
        setSynonymState(prev => prev ? { ...prev, data: synData } : null);
      }
    }
  }, [vocabLevel]);

  // Generate highlight segments
  const segments = segmentTextWithSuggestions(text, suggestions);

  return (
    <div className="wf-editor-container">
      <div className="wf-editor-surface">
        <div className="wf-editor-dual-wrapper">
          {/* Main Writing Textarea */}
          <textarea
            ref={textareaRef}
            className="wf-textarea"
            value={text}
            onChange={handleChange}
            onScroll={handleScroll}
            onSelect={handleSelectOrClick}
            onKeyUp={handleSelectOrClick}
            onClick={handleSelectOrClick}
            placeholder="Start writing or paste your text here..."
            spellCheck={false}
          />

          {/* Transparent Overlay with Visible Thin Wavy Underlines and Glows */}
          <div className="wf-editor-overlay-layer" ref={overlayRef} aria-hidden="true">
            {segments.map((seg, idx) => {
              if (!seg.isSuggestion) {
                return <span key={`txt_${idx}`}>{seg.text}</span>;
              }

              const isHovered = hoveredSuggestionId === seg.suggestion?.id;
              const isSelected = selectedSuggestionId === seg.suggestion?.id || activeSuggestion?.id === seg.suggestion?.id;

              return (
                <mark
                  key={`sugg_${seg.start}_${idx}`}
                  className={`wf-inline-mark severity-${seg.severity} ${isHovered ? 'hovered' : ''} ${isSelected ? 'active' : ''}`}
                >
                  {seg.text}
                </mark>
              );
            })}
          </div>
        </div>

        {/* Floating Card for Grammar Correction if active */}
        {activeSuggestion && (
          <div className="wf-floating-card-wrapper">
            <SuggestionCard
              suggestion={activeSuggestion}
              fullText={text}
              onApply={handleApplyReplacement}
              onIgnore={(id) => {
                onIgnoreSuggestion(id);
                setActiveSuggestion(null);
              }}
              onIgnoreRule={(ruleId) => {
                onIgnoreRule(ruleId);
                setActiveSuggestion(null);
              }}
              onAddToDictionary={(word) => {
                onAddToDictionary(word);
                setActiveSuggestion(null);
              }}
            />
          </div>
        )}

        {/* Inline Synonym Popover if active and no grammar suggestion */}
        {!activeSuggestion && synonymState && (
          <div className="wf-floating-card-wrapper">
            <SynonymPopover
              synonymsData={synonymState.data}
              currentLevel={vocabLevel}
              onSelectLevel={onSelectVocabLevel}
              onReplaceWord={handleApplySynonym}
              onClose={() => setSynonymState(null)}
            />
          </div>
        )}
      </div>

      {/* Editor Status Bar */}
      <footer className="wf-editor-statusbar">
        <div className="wf-statusbar-left">
          <span className="wf-status-item">
            <strong>{stats.words.toLocaleString()}</strong> words
          </span>
          <span className="wf-status-item">
            <strong>{stats.characters.toLocaleString()}</strong> characters
          </span>
          <span className="wf-status-item">
            <strong>{stats.readingTimeMinutes}</strong> min read
          </span>
          <span className="wf-status-item readability" title="Flesch Reading Ease Score (0-100)">
            Readability: <strong>{stats.readabilityScore}/100</strong>
          </span>
        </div>

        <div className="wf-statusbar-right">
          {isBusy ? (
            <span className="wf-status-busy">
              <Loader2 size={13} className="wf-spin" />
              <span>Analyzing...</span>
            </span>
          ) : suggestions.length === 0 ? (
            <span className="wf-status-clean">
              <CheckCircle2 size={14} className="text-success" />
              <span>No errors detected</span>
            </span>
          ) : (
            <span className="wf-status-issues">
              <span className="wf-pulse-dot" />
              <span><strong>{suggestions.length}</strong> suggestion{suggestions.length > 1 ? 's' : ''}</span>
            </span>
          )}
        </div>
      </footer>
    </div>
  );
};
