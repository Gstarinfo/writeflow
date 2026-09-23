import React from 'react';
import { Feather, ShieldCheck, Sun, Moon, Sparkles, BookOpen } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  activeTab: 'writing' | 'synonyms' | 'dictionary' | 'stats';
  setActiveTab: (tab: 'writing' | 'synonyms' | 'dictionary' | 'stats') => void;
  suggestionsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  activeTab,
  setActiveTab,
  suggestionsCount
}) => {
  return (
    <header className="wf-header">
      <div className="wf-header-left">
        <div className="wf-logo">
          <div className="wf-logo-icon">
            <Feather size={22} className="wf-feather-icon" />
          </div>
          <div className="wf-logo-text">
            <span className="wf-brand-title">WriteFlow</span>
            <span className="wf-brand-version">v1.0 Local</span>
          </div>
        </div>

        <div className="wf-privacy-pill" title="All processing occurs 100% on your device via nlprule and Open English WordNet">
          <ShieldCheck size={14} className="wf-shield-icon" />
          <span>Local & Private</span>
        </div>
      </div>

      <nav className="wf-nav-tabs">
        <button
          className={`wf-tab-btn ${activeTab === 'writing' ? 'active' : ''}`}
          onClick={() => setActiveTab('writing')}
        >
          <Sparkles size={16} />
          <span>Writing</span>
          {suggestionsCount > 0 && (
            <span className="wf-badge-count">{suggestionsCount}</span>
          )}
        </button>

        <button
          className={`wf-tab-btn ${activeTab === 'synonyms' ? 'active' : ''}`}
          onClick={() => setActiveTab('synonyms')}
        >
          <BookOpen size={16} />
          <span>Synonyms</span>
        </button>

        <button
          className={`wf-tab-btn ${activeTab === 'dictionary' ? 'active' : ''}`}
          onClick={() => setActiveTab('dictionary')}
        >
          <span>Dictionary</span>
        </button>

        <button
          className={`wf-tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          <span>Stats</span>
        </button>
      </nav>

      <div className="wf-header-right">
        <button
          className="wf-icon-btn"
          onClick={onToggleTheme}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
};
