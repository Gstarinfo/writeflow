import { WritingCoreManager } from '@writeflow/writing-core';
import { GenericTextareaAdapter, ContentEditableAdapter, EditorAdapter } from '@writeflow/browser-adapters';
import { Suggestion } from '@writeflow/suggestion-system';

class WriteFlowExtensionContentScript {
  private core: WritingCoreManager;
  private currentAdapter: EditorAdapter | null = null;
  private sidebarContainer: HTMLElement | null = null;
  private shadowRoot: ShadowRoot | null = null;
  private isSidebarOpen: boolean = false;

  constructor() {
    this.core = new WritingCoreManager({
      onSuggestionsUpdated: (suggestions) => {
        this.renderSidebar(suggestions);
      }
    });

    this.initSidebar();
    this.attachEventListeners();
    this.listenToBackgroundMessages();
  }

  private initSidebar(): void {
    const host = document.createElement('div');
    host.id = 'writeflow-sidebar-host';
    host.style.position = 'fixed';
    host.style.top = '0';
    host.style.right = '0';
    host.style.height = '100vh';
    host.style.zIndex = '2147483647';
    host.style.display = 'flex';
    host.style.pointerEvents = 'none';

    this.shadowRoot = host.attachShadow({ mode: 'open' });
    document.body.appendChild(host);
    this.sidebarContainer = host;
  }

  private attachEventListeners(): void {
    document.addEventListener('focusin', (e) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement) {
        if (target.type === 'password' || target.type === 'hidden') return;
        this.currentAdapter = new GenericTextareaAdapter(target, {
          onTextChanged: (txt) => this.core.updateText(txt)
        });
        this.core.updateText(this.currentAdapter.getText());
      } else if (target.isContentEditable) {
        this.currentAdapter = new ContentEditableAdapter(target, {
          onTextChanged: (txt) => this.core.updateText(txt)
        });
        this.core.updateText(this.currentAdapter.getText());
      }
    });
  }

  private listenToBackgroundMessages(): void {
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg.type === 'WRITEFLOW_OPEN_SYNONYMS' && msg.selectedText) {
        const synData = this.core.getSynonymsForWord(msg.selectedText);
        this.isSidebarOpen = true;
        this.renderSynonymsSidebar(msg.selectedText, synData);
      }
    });
  }

  private renderSidebar(suggestions: Suggestion[]): void {
    if (!this.shadowRoot) return;

    if (suggestions.length === 0 && !this.isSidebarOpen) {
      this.shadowRoot.innerHTML = '';
      return;
    }

    const html = `
      <style>
        .wf-sidebar-overlay {
          pointer-events: auto;
          width: 320px;
          height: 100vh;
          background: #161b22;
          color: #f0f6fc;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: -4px 0 20px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          font-size: 13px;
        }
        .wf-sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: #0d1117;
        }
        .wf-title {
          font-weight: 700;
          color: #58a6ff;
        }
        .wf-close-btn {
          background: transparent;
          border: none;
          color: #8b949e;
          cursor: pointer;
          font-size: 16px;
        }
        .wf-sugg-list {
          flex: 1;
          overflow-y: auto;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .wf-sugg-item {
          padding: 10px;
          background: #1f242c;
          border-radius: 6px;
          border-left: 3px solid #f85149;
        }
        .wf-sugg-replacement {
          font-weight: 600;
          color: #3fb950;
        }
        .wf-apply-btn {
          margin-top: 6px;
          background: #6366f1;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
        }
      </style>
      <div class="wf-sidebar-overlay">
        <div class="wf-sidebar-header">
          <span class="wf-title">WriteFlow Assistant (${suggestions.length})</span>
          <button id="wf-close-x" class="wf-close-btn">✕</button>
        </div>
        <div class="wf-sugg-list">
          ${suggestions.map(s => `
            <div class="wf-sugg-item">
              <div><span style="text-decoration: line-through; color: #f85149;">${s.original}</span> → <span class="wf-sugg-replacement">${s.replacement}</span></div>
              <div style="font-size: 11px; color: #8b949e; margin-top: 4px;">${s.explanation}</div>
              <button class="wf-apply-btn" data-id="${s.id}">Apply</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.shadowRoot.innerHTML = html;

    this.shadowRoot.getElementById('wf-close-x')?.addEventListener('click', () => {
      this.isSidebarOpen = false;
      if (this.shadowRoot) this.shadowRoot.innerHTML = '';
    });

    this.shadowRoot.querySelectorAll('.wf-apply-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.target as HTMLElement).getAttribute('data-id');
        if (id && this.currentAdapter) {
          const res = this.core.applySuggestion(id);
          if (res.success) {
            this.currentAdapter.replaceRange(0, this.currentAdapter.getText().length, res.newText);
          }
        }
      });
    });
  }

  private renderSynonymsSidebar(word: string, synData: any): void {
    if (!this.shadowRoot || !synData) return;

    const html = `
      <style>
        .wf-sidebar-overlay {
          pointer-events: auto;
          width: 320px;
          height: 100vh;
          background: #161b22;
          color: #f0f6fc;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: -4px 0 20px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          font-size: 13px;
          padding: 16px;
        }
      </style>
      <div class="wf-sidebar-overlay">
        <h3>WordNet Synonyms for "${word}"</h3>
        <p style="color: #8b949e; font-style: italic;">${synData.definition || ''}</p>
        <div style="margin-top: 12px;">
          <strong>Similar:</strong>
          <div>${synData.categories.similar.join(', ') || 'None'}</div>
        </div>
        <div style="margin-top: 12px;">
          <strong>Stronger:</strong>
          <div>${synData.categories.stronger.join(', ') || 'None'}</div>
        </div>
        <div style="margin-top: 12px;">
          <strong>Antonyms:</strong>
          <div>${synData.antonyms.join(', ') || 'None'}</div>
        </div>
      </div>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

new WriteFlowExtensionContentScript();
