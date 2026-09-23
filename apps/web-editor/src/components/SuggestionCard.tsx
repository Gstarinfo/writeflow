import React from 'react';
import { Suggestion } from '@writeflow/suggestion-system';
import { Check, X, Ban, BookPlus, AlertCircle, AlertTriangle, Info, Sparkles, MapPin } from 'lucide-react';

interface SuggestionCardProps {
  suggestion: Suggestion;
  fullText?: string;
  onApply: (suggestionId: string, replacement?: string) => void;
  onIgnore: (suggestionId: string) => void;
  onIgnoreRule: (ruleId: string) => void;
  onAddToDictionary: (word: string) => void;
  onSelect?: (suggestion: Suggestion) => void;
  onHover?: (suggestionId: string | null) => void;
  isActive?: boolean;
  style?: React.CSSProperties;
  compact?: boolean;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestion,
  fullText = '',
  onApply,
  onIgnore,
  onIgnoreRule,
  onAddToDictionary,
  onSelect,
  onHover,
  isActive = false,
  style,
  compact = false
}) => {
  const getSeverityIcon = () => {
    switch (suggestion.severity) {
      case 'error':
        return <AlertCircle size={14} className="text-error" />;
      case 'warning':
        return <AlertTriangle size={14} className="text-warning" />;
      case 'improvement':
        return <Sparkles size={14} className="text-improvement" />;
      case 'info':
      default:
        return <Info size={14} className="text-info" />;
    }
  };

  const getSeverityLabel = () => {
    switch (suggestion.severity) {
      case 'error':
        return 'Grammar';
      case 'warning':
        return 'Warning';
      case 'improvement':
        return 'Improvement';
      case 'info':
      default:
        return 'Info';
    }
  };

  // Extract contextual snippet around the error
  const getContextSnippet = () => {
    if (!fullText) {
      return (
        <span className="wf-snippet-text">
          <span className="wf-snippet-target">{suggestion.original}</span>
        </span>
      );
    }

    const start = Math.max(0, suggestion.start - 25);
    const end = Math.min(fullText.length, suggestion.end + 25);

    const prefix = (start > 0 ? '…' : '') + fullText.slice(start, suggestion.start);
    const target = fullText.slice(suggestion.start, suggestion.end);
    const suffix = fullText.slice(suggestion.end, end) + (end < fullText.length ? '…' : '');

    return (
      <div className="wf-card-context-box">
        <MapPin size={12} className="wf-context-pin" />
        <span className="wf-snippet-text">
          {prefix}
          <span className="wf-snippet-target">{target}</span>
          {suffix}
        </span>
      </div>
    );
  };

  return (
    <div
      className={`wf-suggestion-card severity-${suggestion.severity} ${isActive ? 'is-active' : ''} ${compact ? 'compact' : ''} animate-fade-in`}
      style={style}
      onClick={() => onSelect?.(suggestion)}
      onMouseEnter={() => onHover?.(suggestion.id)}
      onMouseLeave={() => onHover?.(null)}
    >
      <div className="wf-card-header">
        <div className="wf-card-severity-badge">
          {getSeverityIcon()}
          <span className="wf-severity-text">{getSeverityLabel()}</span>
          <span className="wf-card-category">{suggestion.category.replace(/_/g, ' ')}</span>
        </div>
        <div className="wf-confidence-tag">
          {Math.round(suggestion.confidence * 100)}% match
        </div>
      </div>

      {/* Context in document */}
      {getContextSnippet()}

      {/* Visual Diff: Original -> Replacement */}
      <div className="wf-card-replacement-row">
        <span className="wf-orig-text" title="Original text">{suggestion.original}</span>
        <span className="wf-arrow-icon">→</span>
        <button
          className="wf-replacement-badge"
          onClick={(e) => {
            e.stopPropagation();
            onApply(suggestion.id, suggestion.replacement);
          }}
          title="Click to apply correction"
        >
          <Check size={13} />
          <span>{suggestion.replacement}</span>
        </button>
      </div>

      <p className="wf-card-explanation">{suggestion.explanation}</p>

      <div className="wf-card-actions">
        <button
          className="wf-btn wf-btn-primary"
          onClick={(e) => {
            e.stopPropagation();
            onApply(suggestion.id, suggestion.replacement);
          }}
        >
          <Check size={14} />
          <span>Apply</span>
        </button>

        <button
          className="wf-btn wf-btn-secondary"
          onClick={(e) => {
            e.stopPropagation();
            onIgnore(suggestion.id);
          }}
          title="Ignore this instance"
        >
          <X size={13} />
          <span>Ignore</span>
        </button>

        {suggestion.ruleId && (
          <button
            className="wf-btn wf-btn-ghost"
            onClick={(e) => {
              e.stopPropagation();
              onIgnoreRule(suggestion.ruleId!);
            }}
            title="Ignore this rule everywhere"
          >
            <Ban size={12} />
            <span>Ignore Rule</span>
          </button>
        )}

        {suggestion.type === 'spelling' && (
          <button
            className="wf-btn wf-btn-ghost"
            onClick={(e) => {
              e.stopPropagation();
              onAddToDictionary(suggestion.original);
            }}
            title="Add to your personal dictionary"
          >
            <BookPlus size={12} />
            <span>Add Word</span>
          </button>
        )}
      </div>
    </div>
  );
};
