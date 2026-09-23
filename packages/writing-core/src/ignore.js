const STORAGE_KEY_IGNORED_RULES = 'writeflow_ignored_rules';
const STORAGE_KEY_IGNORED_WORDS = 'writeflow_ignored_words';
export class IgnoreManager {
    ignoredRules = new Set();
    ignoredWords = new Set();
    constructor() {
        this.load();
    }
    load() {
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                const rules = localStorage.getItem(STORAGE_KEY_IGNORED_RULES);
                if (rules)
                    this.ignoredRules = new Set(JSON.parse(rules));
                const words = localStorage.getItem(STORAGE_KEY_IGNORED_WORDS);
                if (words)
                    this.ignoredWords = new Set(JSON.parse(words));
            }
        }
        catch (e) {
            console.warn('[WriteFlow] Could not load ignore rules', e);
        }
    }
    save() {
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem(STORAGE_KEY_IGNORED_RULES, JSON.stringify(Array.from(this.ignoredRules)));
                localStorage.setItem(STORAGE_KEY_IGNORED_WORDS, JSON.stringify(Array.from(this.ignoredWords)));
            }
        }
        catch (e) {
            console.warn('[WriteFlow] Could not save ignore rules', e);
        }
    }
    ignoreRule(ruleId) {
        if (ruleId) {
            this.ignoredRules.add(ruleId);
            this.save();
        }
    }
    ignoreWord(word) {
        const clean = word.toLowerCase().trim();
        if (clean) {
            this.ignoredWords.add(clean);
            this.save();
        }
    }
    isRuleIgnored(ruleId) {
        return this.ignoredRules.has(ruleId);
    }
    isWordIgnored(word) {
        return this.ignoredWords.has(word.toLowerCase().trim());
    }
    getIgnoredRules() {
        return new Set(this.ignoredRules);
    }
    getIgnoredWords() {
        return new Set(this.ignoredWords);
    }
    clear() {
        this.ignoredRules.clear();
        this.ignoredWords.clear();
        this.save();
    }
}
//# sourceMappingURL=ignore.js.map