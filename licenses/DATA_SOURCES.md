# Data Sources & Provenance

### 1. Open English WordNet
- **Dataset**: Open English WordNet (latest release)
- **Format**: JSON Indexed Lexical Graph
- **Source**: `https://github.com/globalwordnet/english-wordnet`
- **Fields Processed**:
  - Lemmas & Word Forms
  - Synsets (Noun, Verb, Adjective, Adverb)
  - Definitions (Glosses) & Examples
  - Antonyms
  - Semantic relations (Hypernyms, Similar-To)
  - Frequency indicators & register categorization (Simple, Natural, Professional, Academic, Advanced)

### 2. English Linguistic & Spelling Ruleset
- **Components**:
  - Subject-Verb Agreement matrices (singular/plural noun-verb alignments)
  - Common English Confusables & Homophones (their/there/they're, affect/effect, its/it's, then/than, etc.)
  - Irregular Verb inflection tables
  - Article determination algorithms (*a* before consonant sounds, *an* before vowel sounds)
  - Common English Spelling Dictionary & Typo Edit-Distance Tables (SymSpell/Levenshtein derived)
