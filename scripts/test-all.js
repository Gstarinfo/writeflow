import { createDocumentModel } from '../packages/document-model/dist/index.js';
import { grammarEngine } from '../packages/grammar-engine/dist/index.js';
import { synonymEngine } from '../packages/synonym-engine/dist/index.js';
import { WritingCoreManager } from '../packages/writing-core/dist/index.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failed++;
  }
}

console.log('\n========================================');
console.log('🧪 [WriteFlow Test Suite - Local Verification]');
console.log('========================================');

// 1. Document Model Tests
console.log('\n--- 1. Document Model & Tokenization ---');
const doc1 = createDocumentModel('He go to school every day. The bag is light.');
assert(doc1.sentences.length === 2, 'Should segment into 2 sentences');
assert(doc1.sentences[0].tokens.length > 0, 'Should tokenize first sentence correctly');
assert(doc1.sentences[0].tokens[0].text === 'He', 'First token is "He"');
assert(doc1.sentences[0].tokens[1].text === 'go', 'Second token is "go"');

// 2. Grammar Engine Tests
console.log('\n--- 2. Grammar Engine (nlprule / linguistic analysis) ---');
const grammarDoc = createDocumentModel('He go to school. I could of done it. However the result is more better.');
const grammarSuggestions = grammarEngine.analyze(grammarDoc);

assert(grammarSuggestions.some(s => s.original.includes('go') && s.replacement.includes('goes')), 'Catches subject-verb mismatch (He go -> goes)');
assert(grammarSuggestions.some(s => s.original.includes('could of') && s.replacement.includes('could have')), 'Catches modal auxiliary error (could of -> could have)');
assert(grammarSuggestions.some(s => s.original.includes('more better') && s.replacement.includes('better')), 'Catches double comparative (more better -> better)');

// Typo test
const typoDoc = createDocumentModel('I recieved teh package untill tommorow.');
const typoSuggestions = grammarEngine.analyze(typoDoc);
assert(typoSuggestions.some(s => s.original === 'recieved' && s.replacement === 'received'), 'Corrects typo "recieved" -> "received"');
assert(typoSuggestions.some(s => s.original === 'teh' && s.replacement === 'the'), 'Corrects typo "teh" -> "the"');
assert(typoSuggestions.some(s => s.original === 'untill' && s.replacement === 'until'), 'Corrects typo "untill" -> "until"');

// Algorithmic candidate generation test
const spellingDoc = createDocumentModel('This computr has an exampel of a problm.');
const spellSuggestions = grammarEngine.analyze(spellingDoc);
assert(spellSuggestions.some(s => s.original === 'computr' && s.replacement === 'computer'), 'Catches misspelled "computr" -> "computer"');
assert(spellSuggestions.some(s => s.original === 'exampel' && s.replacement === 'example'), 'Catches misspelled "exampel" -> "example"');
assert(spellSuggestions.some(s => s.original === 'problm' && s.replacement === 'problem'), 'Catches misspelled "problm" -> "problem"');

// 3. Open English WordNet Synonym Engine Tests
console.log('\n--- 3. Synonym Engine & Contextual WordNet ---');
// Sense 1: Weight
const lightWeightRes = synonymEngine.getSynonyms('light', 'The bag is light.');
assert(lightWeightRes.hasResults, 'Found synonyms for "light" in weight context');
assert(lightWeightRes.data.categories.similar.some(s => s.includes('lightweight') || s.includes('featherweight') || s.includes('weightless') || s.includes('slight')), 'Identified weight-related synonyms for "The bag is light."');
assert(lightWeightRes.data.antonyms.includes('heavy'), 'Identified "heavy" as antonym for light (weight)');

// Sense 2: Illumination
const lightIllumRes = synonymEngine.getSynonyms('light', 'Turn on the light in the room.');
assert(lightIllumRes.hasResults, 'Found synonyms for "light" in illumination context');
assert(lightIllumRes.data.posName === 'Noun', 'Identified "light" as Noun in "turn on the light"');

// Word "important" test
const impRes = synonymEngine.getSynonyms('important', 'This is an important decision.');
assert(impRes.hasResults, 'Found synonyms for "important"');
assert(impRes.data.categories.similar.includes('significant'), 'Contains "significant" in similar category');
assert(impRes.data.categories.stronger.includes('critical'), 'Contains "critical" in stronger category');
assert(impRes.data.categories.simpler.includes('key'), 'Contains "key" in simpler category');
assert(impRes.data.antonyms.includes('unimportant'), 'Contains "unimportant" in antonyms');

// 4. Writing Core Manager & Lifecycle Tests
console.log('\n--- 4. Writing Core & Personal Dictionary ---');
const core = new WritingCoreManager();
core.updateText('This is Xiaomi and HyperOS with a mistake.');
core.dictionary.add('xiaomi');
core.dictionary.add('hyperos');
assert(core.dictionary.has('xiaomi'), 'Dictionary contains custom word "xiaomi"');
assert(core.dictionary.has('hyperos'), 'Dictionary contains custom word "hyperos"');

const coreSuggestions = core.analyzeNow();
// Verify custom dictionary words are not flagged
const flaggedDictWords = coreSuggestions.filter(s => s.original.toLowerCase() === 'xiaomi' || s.original.toLowerCase() === 'hyperos');
assert(flaggedDictWords.length === 0, 'Custom dictionary words are not flagged as errors');

// Summary
console.log(`\n========================================`);
console.log(`Summary: Passed: ${passed}, Failed: ${failed}`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}
