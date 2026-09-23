import React from 'react';
import { CategorizedSynonyms } from '@writeflow/synonym-engine';
import { VocabularyLevel } from '@writeflow/engine-wordnet';
import { BookOpen, ArrowRightLeft, Sparkles, X, ChevronRight } from 'lucide-react';

interface SynonymPopoverProps {
  synonymsData: CategorizedSynonyms;
  currentLevel: VocabularyLevel;
  onSelectLevel: (level: VocabularyLevel) => void;
  onReplaceWord: (replacement: string) => void;
  onClose?: () => void;
}

const VOCAB_LEVELS: { id: VocabularyLevel; label: string }[] = [
  { id: 'simple', label: 'Simple' },
  { id: 'natural', label: 'Natural' },
  { id: 'professional', label: 'Professional' },
  { id: 'academic', label: 'Academic' },
  { id: 'advanced', label: 'Advanced' }
];

export const SynonymPopover: React.FC<SynonymPopoverProps> = ({
  synonymsData,
  currentLevel,
  onSelectLevel,
  onReplaceWord,
  onClose
}) => {
  const { originalWord, posName, definition, categories, antonyms } = synonymsData;

  const hasSimilar = categories.similar.length > 0;
  const hasStronger = categories.stronger.length > 0;
  const hasSimpler = categories.simpler.length > 0;
  const hasFormal = categories.formal.length > 0;
  const hasAntonyms = antonyms.length > 0;

  return (
    <div className="wf-synonym-panel animate-fade-in">
      <div className="wf-synonym-header">
        <div className="wf-synonym-title-row">
          <div className="wf-synonym-word-badge">
            <span className="wf-synonym-word">{originalWord}</span>
            <span className="wf-synonym-pos">{posName}</span>
          </div>
          {onClose && (
            <button className="wf-icon-btn-sm" onClick={onClose} title="Close">
              <X size={14} />
            </button>
          )}
        </div>

        {definition && (
          <p className="wf-synonym-definition">
            {definition}
          </p>
        )}
      </div>

      {/* Vocabulary Level Selector */}
      <div className="wf-vocab-level-selector">
        <span className="wf-vocab-label">Vocabulary:</span>
        <div className="wf-vocab-pill-group">
          {VOCAB_LEVELS.map(lvl => (
            <button
              key={lvl.id}
              className={`wf-vocab-pill ${currentLevel === lvl.id ? 'active' : ''}`}
              onClick={() => onSelectLevel(lvl.id)}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categorized Synonyms */}
      <div className="wf-synonym-groups">
        {hasSimilar && (
          <div className="wf-synonym-group">
            <div className="wf-group-label similar">
              <span>Similar</span>
            </div>
            <div className="wf-group-chips">
              {categories.similar.map(syn => (
                <button
                  key={syn}
                  className="wf-synonym-chip"
                  onClick={() => onReplaceWord(syn)}
                  title={`Replace "${originalWord}" with "${syn}"`}
                >
                  <span>{syn}</span>
                  <ChevronRight size={12} className="chip-arrow" />
                </button>
              ))}
            </div>
          </div>
        )}

        {hasStronger && (
          <div className="wf-synonym-group">
            <div className="wf-group-label stronger">
              <span>Stronger</span>
            </div>
            <div className="wf-group-chips">
              {categories.stronger.map(syn => (
                <button
                  key={syn}
                  className="wf-synonym-chip"
                  onClick={() => onReplaceWord(syn)}
                  title={`Replace "${originalWord}" with "${syn}"`}
                >
                  <span>{syn}</span>
                  <ChevronRight size={12} className="chip-arrow" />
                </button>
              ))}
            </div>
          </div>
        )}

        {hasSimpler && (
          <div className="wf-synonym-group">
            <div className="wf-group-label simpler">
              <span>Simpler</span>
            </div>
            <div className="wf-group-chips">
              {categories.simpler.map(syn => (
                <button
                  key={syn}
                  className="wf-synonym-chip"
                  onClick={() => onReplaceWord(syn)}
                  title={`Replace "${originalWord}" with "${syn}"`}
                >
                  <span>{syn}</span>
                  <ChevronRight size={12} className="chip-arrow" />
                </button>
              ))}
            </div>
          </div>
        )}

        {hasFormal && (
          <div className="wf-synonym-group">
            <div className="wf-group-label formal">
              <span>Formal</span>
            </div>
            <div className="wf-group-chips">
              {categories.formal.map(syn => (
                <button
                  key={syn}
                  className="wf-synonym-chip"
                  onClick={() => onReplaceWord(syn)}
                  title={`Replace "${originalWord}" with "${syn}"`}
                >
                  <span>{syn}</span>
                  <ChevronRight size={12} className="chip-arrow" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Antonyms Section */}
        {hasAntonyms && (
          <div className="wf-synonym-group antonyms">
            <div className="wf-group-label antonyms-label">
              <ArrowRightLeft size={13} />
              <span>Antonyms</span>
            </div>
            <div className="wf-group-chips">
              {antonyms.map(ant => (
                <button
                  key={ant}
                  className="wf-synonym-chip antonym"
                  onClick={() => onReplaceWord(ant)}
                  title={`Replace "${originalWord}" with antonym "${ant}"`}
                >
                  <span>{ant}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {!hasSimilar && !hasStronger && !hasSimpler && !hasFormal && (
          <div className="wf-synonym-empty">
            <p>No synonyms available for the selected sense.</p>
          </div>
        )}
      </div>
    </div>
  );
};
