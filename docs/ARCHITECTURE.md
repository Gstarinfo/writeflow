# Architecture Overview

## Monorepo Layout
```
writeflow/
├── apps/
│   ├── web-editor/                 # Vite + React Minimalist Editor App
│   └── browser-extension/          # Manifest V3 Content Script & Sidebar Extension
├── packages/
│   ├── document-model/             # Normalized document representation & offset indexing
│   ├── suggestion-system/          # Standardized Suggestion interface, severity, confidence
│   ├── grammar-engine/             # Rule-based linguistic analyzer & spell checker
│   ├── synonym-engine/             # Open English WordNet context-ranked synonym engine
│   ├── writing-core/               # Engine orchestrator, debounce scheduler, user dictionary
│   ├── editor/                     # Minimalist editor UI component & live decorations
│   └── browser-adapters/           # Site adapters (generic textareas, contenteditable, CMS)
├── engines/
│   ├── nlprule/                    # Grammar engine interface & rules
│   └── wordnet/                    # WordNet loader & sense graph
├── data/
│   └── wordnet/                    # Compact indexed WordNet database
├── licenses/                       # Third-party licenses & CC BY 4.0 notices
└── docs/                           # Documentation
```

## Data Flow
```
User Text
   │
   ▼
[Document Model] ── (Paragraphs, Sentences, Tokens)
   │
   ├──────────────────────────────┬──────────────────────────────┐
   ▼                              ▼                              ▼
[Grammar Engine]           [Synonym Engine]              [Future Engines]
 (Linguistic Rules,         (Open English WordNet,        (Paraphrase, SEO)
  Spelling, Punctuation)     Sense Disambiguation)
   │                              │
   └──────────────┬───────────────┘
                  ▼
         [Suggestion Manager]
                  │ (Confidence Filtering, Dictionary Check, Ignore Rules)
                  ▼
         [Editor Highlight UI & Sidebar]
```
