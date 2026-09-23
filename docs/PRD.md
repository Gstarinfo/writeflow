# PRD — WriteFlow: Local Writing Assistant
Version 1.0 — Grammar + Synonym Engine
Product type: Cross-platform writing assistant
Initial experience: Simple text editor + browser extension
Primary goal: Fast, private, local English writing assistance
Grammar engine: nlprule / Linguistic Analysis Pipeline
Synonym resource: Open English WordNet
Future engines: Paraphrasing + SEO

## 1. Product Vision
The first version stays deliberately focused: help users write correct English and choose better words, without turning the product into a complicated word processor.
The core experience is:
**Write → Detect → Explain → Correct → Improve vocabulary**

All basic functionality runs 100% locally on device without sending user writing to the cloud.

## 2. Phase 1 Scope
- **Grammar checking**: Subject-verb agreement, verb tenses, articles, pronouns, prepositions, word order.
- **Spelling checking**: Misspelled words, common typos, contextual confusables.
- **Punctuation checking**: Missing/extra commas, apostrophes, double punctuation, spacing.
- **Explanations**: Clear educational feedback for why a correction is suggested.
- **Contextual Synonyms**: Powered by Open English WordNet with multi-tier ranking.
- **Antonyms & Word Information**: Part of speech, definitions, examples.
- **Vocabulary Preferences**: Simple, Natural, Professional, Academic, Advanced.
- **Personal Dictionary**: Add, remove, import, and export custom vocabulary.
- **Ignore Rules**: Ignore word, ignore rule, persistent across sessions.
- **Interfaces**: Clean minimalist web editor + Manifest V3 browser extension with non-overlapping sidebar.
