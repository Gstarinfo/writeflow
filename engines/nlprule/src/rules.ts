import { Suggestion, SuggestionSeverity, SuggestionType } from '@writeflow/suggestion-system';

export interface GrammarRulePattern {
  id: string;
  category: string;
  type: SuggestionType;
  severity: SuggestionSeverity;
  regex: RegExp;
  replacement: string | ((match: RegExpExecArray) => string);
  explanation: string | ((match: RegExpExecArray) => string);
  confidence: number;
}

export const GRAMMAR_RULES: GrammarRulePattern[] = [
  // 1. Subject-Verb Agreement: Pronouns (He/She/It go -> goes, They goes -> go, etc.)
  {
    id: 'SVA_PRON_SINGULAR_GO',
    category: 'subject_verb_agreement',
    type: 'grammar',
    severity: 'error',
    regex: /\b(he|she|it)\s+(go)\b/gi,
    replacement: (m) => `${m[1]} goes`,
    explanation: (m) => `The third-person singular subject "${m[1]}" requires the singular verb "goes".`,
    confidence: 0.98
  },
  {
    id: 'SVA_PRON_SINGULAR_DO',
    category: 'subject_verb_agreement',
    type: 'grammar',
    severity: 'error',
    regex: /\b(he|she|it)\s+(do)\b/gi,
    replacement: (m) => `${m[1]} does`,
    explanation: (m) => `The subject "${m[1]}" requires the singular verb form "does".`,
    confidence: 0.98
  },
  {
    id: 'SVA_PRON_SINGULAR_HAVE',
    category: 'subject_verb_agreement',
    type: 'grammar',
    severity: 'error',
    regex: /\b(he|she|it)\s+(have)\b/gi,
    replacement: (m) => `${m[1]} has`,
    explanation: (m) => `The singular subject "${m[1]}" requires "has" rather than "have".`,
    confidence: 0.98
  },
  {
    id: 'SVA_PRON_PLURAL_HAS',
    category: 'subject_verb_agreement',
    type: 'grammar',
    severity: 'error',
    regex: /\b(they|we|you|I)\s+(has)\b/gi,
    replacement: (m) => `${m[1]} have`,
    explanation: (m) => `The subject "${m[1]}" requires the plural/first-person verb form "have".`,
    confidence: 0.98
  },
  {
    id: 'SVA_PRON_PLURAL_DOES',
    category: 'subject_verb_agreement',
    type: 'grammar',
    severity: 'error',
    regex: /\b(they|we|you|I)\s+(does)\b/gi,
    replacement: (m) => `${m[1]} do`,
    explanation: (m) => `The subject "${m[1]}" requires "do" instead of "does".`,
    confidence: 0.98
  },
  {
    id: 'SVA_PRON_SINGULAR_VERB_S',
    category: 'subject_verb_agreement',
    type: 'grammar',
    severity: 'error',
    regex: /\b(he|she|it)\s+(want|need|take|make|know|think|see|come|look|use|find|give|tell|work|call|try|ask|feel|leave)\b/gi,
    replacement: (m) => `${m[1]} ${m[2]}s`,
    explanation: (m) => `The singular subject "${m[1]}" requires the verb to end in "-s" ("${m[2]}s").`,
    confidence: 0.95
  },
  {
    id: 'SVA_PRON_PLURAL_VERB_NO_S',
    category: 'subject_verb_agreement',
    type: 'grammar',
    severity: 'error',
    regex: /\b(they|we|you)\s+(wants|needs|takes|makes|knows|thinks|sees|comes|looks|uses|finds|gives|tells|works|calls|tries|asks|feels|leaves)\b/gi,
    replacement: (m) => {
      const verb = m[2];
      const base = verb.endsWith('ies') ? verb.slice(0, -3) + 'y' : verb.endsWith('s') ? verb.slice(0, -1) : verb;
      return `${m[1]} ${base}`;
    },
    explanation: (m) => `The plural subject "${m[1]}" takes a base verb without the singular "-s" suffix.`,
    confidence: 0.94
  },

  // 2. Articles (A vs An)
  {
    id: 'ARTICLE_A_BEFORE_VOWEL',
    category: 'articles',
    type: 'grammar',
    severity: 'error',
    regex: /\b(a)\s+([aeio][a-z]+|un[a-z]+|hour[a-z]*|honest[a-z]*|honor[a-z]*)\b/gi,
    replacement: (m) => `an ${m[2]}`,
    explanation: (m) => `Use the article "an" before words starting with a vowel sound ("${m[2]}").`,
    confidence: 0.97
  },
  {
    id: 'ARTICLE_AN_BEFORE_CONSONANT',
    category: 'articles',
    type: 'grammar',
    severity: 'error',
    regex: /\b(an)\s+(university|uniform|unique|user|european|one|hotel|system|tool|book|computer|word|sentence)\b/gi,
    replacement: (m) => `a ${m[2]}`,
    explanation: (m) => `Use the article "a" before words that start with a consonant sound ("${m[2]}").`,
    confidence: 0.96
  },

  // 3. Modal / Auxiliary Verb Mistakes (could of -> could have)
  {
    id: 'COULD_OF_MISTAKE',
    category: 'verb_tense',
    type: 'grammar',
    severity: 'error',
    regex: /\b(could|should|would|must|might)\s+(of)\b/gi,
    replacement: (m) => `${m[1]} have`,
    explanation: (m) => `Did you mean "${m[1]} have"? "Of" is a preposition, whereas "have" is the auxiliary verb.`,
    confidence: 0.99
  },
  {
    id: 'HAVE_WENT_MISTAKE',
    category: 'verb_tense',
    type: 'grammar',
    severity: 'error',
    regex: /\b(have|has|had)\s+(went)\b/gi,
    replacement: (m) => `${m[1]} gone`,
    explanation: () => `The past participle of "go" is "gone" (e.g. "have gone"), not the simple past "went".`,
    confidence: 0.99
  },

  // 4. Double Comparatives & Superlatives
  {
    id: 'DOUBLE_COMPARATIVE',
    category: 'comparatives',
    type: 'grammar',
    severity: 'error',
    regex: /\b(more)\s+(better|faster|easier|harder|simpler|clearer|stronger|smarter|bigger|smaller)\b/gi,
    replacement: (m) => m[2],
    explanation: (m) => `"${m[2]}" is already a comparative form; adding "more" creates an unnecessary double comparative.`,
    confidence: 0.98
  },
  {
    id: 'DOUBLE_SUPERLATIVE',
    category: 'comparatives',
    type: 'grammar',
    severity: 'error',
    regex: /\b(most)\s+(best|fastest|easiest|hardest|simplest|clearest|strongest|smartest|biggest|smallest)\b/gi,
    replacement: (m) => m[2],
    explanation: (m) => `"${m[2]}" is already a superlative form; avoid using "most ${m[2]}".`,
    confidence: 0.98
  },

  // 5. Pronoun Case (between you and I -> between you and me)
  {
    id: 'PRONOUN_BETWEEN_YOU_AND_I',
    category: 'pronouns',
    type: 'grammar',
    severity: 'error',
    regex: /\bbetween\s+(you\s+and\s+I)\b/gi,
    replacement: 'between you and me',
    explanation: () => `As the object of the preposition "between", the objective pronoun "me" should be used instead of "I".`,
    confidence: 0.97
  },

  // 6. Prepositions & Idioms
  {
    id: 'PREP_DEPEND_OF',
    category: 'prepositions',
    type: 'grammar',
    severity: 'error',
    regex: /\b(depend|depends|depending)\s+(of)\b/gi,
    replacement: (m) => `${m[1]} on`,
    explanation: () => `The verb "depend" takes the preposition "on" (or "upon"), not "of".`,
    confidence: 0.98
  },
  {
    id: 'PREP_COMPLY_TO',
    category: 'prepositions',
    type: 'grammar',
    severity: 'error',
    regex: /\b(comply|complies|complying)\s+(to)\b/gi,
    replacement: (m) => `${m[1]} with`,
    explanation: () => `The idiom is "comply with", not "comply to".`,
    confidence: 0.98
  },
  {
    id: 'PREP_RESPONSIBLE_OF',
    category: 'prepositions',
    type: 'grammar',
    severity: 'error',
    regex: /\b(responsible)\s+(of)\b/gi,
    replacement: 'responsible for',
    explanation: () => `The adjective "responsible" is paired with "for" when denoting duty or cause.`,
    confidence: 0.98
  },

  // 7. Uncountable Nouns Pluralization
  {
    id: 'UNCOUNTABLE_INFORMATIONS',
    category: 'singular_plural',
    type: 'grammar',
    severity: 'error',
    regex: /\b(many|several|a\s+few)\s+(informations)\b/gi,
    replacement: 'much information',
    explanation: () => `"Information" is an uncountable noun in English and does not take a plural "-s".`,
    confidence: 0.98
  },

  // 8. Homophones & Confusables
  {
    id: 'CONFUSABLE_THEIR_THERE_THEYRE',
    category: 'confusables',
    type: 'grammar',
    severity: 'warning',
    regex: /\b(their)\s+(is|are|was|were|will|has|have|had)\b/gi,
    replacement: (m) => `there ${m[2]}`,
    explanation: (m) => `Did you mean the existential "there ${m[2]}" instead of possessive "their"?`,
    confidence: 0.95
  },
  {
    id: 'CONFUSABLE_ITS_IT_IS',
    category: 'confusables',
    type: 'grammar',
    severity: 'warning',
    regex: /\b(its)\s+(a|an|the|going|not|very|really|important|easy|hard|difficult|good|bad)\b/gi,
    replacement: (m) => `it's ${m[2]}`,
    explanation: (m) => `Did you mean the contraction "it's" (it is) rather than the possessive "its"?`,
    confidence: 0.94
  },
  {
    id: 'CONFUSABLE_YOUR_YOURE',
    category: 'confusables',
    type: 'grammar',
    severity: 'warning',
    regex: /\b(your)\s+(welcome|right|wrong|invited|doing|going|writing)\b/gi,
    replacement: (m) => `you're ${m[2]}`,
    explanation: (m) => `Did you mean "you're" (you are) instead of the possessive "your"?`,
    confidence: 0.95
  },
  {
    id: 'CONFUSABLE_THEN_THAN',
    category: 'confusables',
    type: 'grammar',
    severity: 'warning',
    regex: /\b(better|faster|easier|harder|simpler|more|less|greater|smaller)\s+(then)\b/gi,
    replacement: (m) => `${m[1]} than`,
    explanation: (m) => `Comparisons use "than" rather than the time adverb "then".`,
    confidence: 0.97
  },
  {
    id: 'CONFUSABLE_LOOSE_LOSE',
    category: 'confusables',
    type: 'grammar',
    severity: 'warning',
    regex: /\b(loose)\s+(the|your|my|our|their|his|her|weight|money|data|access)\b/gi,
    replacement: (m) => `lose ${m[2]}`,
    explanation: (m) => `Did you mean the verb "lose" (to misplace or fail to keep) instead of "loose" (not tight)?`,
    confidence: 0.95
  },
  {
    id: 'CONFUSABLE_AFFECT_EFFECT',
    category: 'confusables',
    type: 'grammar',
    severity: 'warning',
    regex: /\b(the|an|this|that|positive|negative|side)\s+(affect)\b/gi,
    replacement: (m) => `${m[1]} effect`,
    explanation: (m) => `"Effect" is usually a noun (result), while "affect" is usually a verb (to influence).`,
    confidence: 0.94
  },

  // 9. Punctuation & Spacing
  {
    id: 'PUNCT_DOUBLE_SPACE',
    category: 'spacing',
    type: 'punctuation',
    severity: 'info',
    regex: /([^\s])[ \t]{2,}([^\s])/g,
    replacement: (m) => `${m[1]} ${m[2]}`,
    explanation: () => `Multiple consecutive spaces detected. Use a single space.`,
    confidence: 0.95
  },
  {
    id: 'PUNCT_SPACE_BEFORE_COMMA',
    category: 'punctuation',
    type: 'punctuation',
    severity: 'error',
    regex: /\s+([,\.!?:;])/g,
    replacement: (m) => m[1],
    explanation: (m) => `Remove the space before the punctuation mark "${m[1]}".`,
    confidence: 0.98
  },
  {
    id: 'PUNCT_REPEATED_COMMAS',
    category: 'punctuation',
    type: 'punctuation',
    severity: 'error',
    regex: /,{2,}/g,
    replacement: ',',
    explanation: () => `Repeated commas detected. Replace with a single comma.`,
    confidence: 0.99
  },
  {
    id: 'PUNCT_MISSING_INTRO_COMMA',
    category: 'punctuation',
    type: 'punctuation',
    severity: 'improvement',
    regex: /\b(However|Therefore|Furthermore|Moreover|In addition|For example|On the other hand|Consequently)\s+([a-zA-Z]+)/g,
    replacement: (m) => `${m[1]}, ${m[2]}`,
    explanation: (m) => `Introductory transition word "${m[1]}" is usually followed by a comma.`,
    confidence: 0.88
  }
];
