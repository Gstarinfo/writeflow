const STORAGE_KEY_IGNORED_RULES = 'writeflow_ignored_rules';
const STORAGE_KEY_IGNORED_WORDS = 'writeflow_ignored_words';

export class IgnoreManager {
  private ignoredRules: Set<string> = new Set();
  private ignoredWords: Set<string> = new Set();

  constructor() {
    this.load();
  }

  private load(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const rules = localStorage.getItem(STORAGE_KEY_IGNORED_RULES);
        if (rules) this.ignoredRules = new Set(JSON.parse(rules));

        const words = localStorage.getItem(STORAGE_KEY_IGNORED_WORDS);
        if (words) this.ignoredWords = new Set(JSON.parse(words));
      }
    } catch (e) {
      console.warn('[WriteFlow] Could not load ignore rules', e);
    }
  }

  private save(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(
          STORAGE_KEY_IGNORED_RULES,
          JSON.stringify(Array.from(this.ignoredRules))
        );
        localStorage.setItem(
          STORAGE_KEY_IGNORED_WORDS,
          JSON.stringify(Array.from(this.ignoredWords))
        );
      }
    } catch (e) {
      console.warn('[WriteFlow] Could not save ignore rules', e);
    }
  }

  public ignoreRule(ruleId: string): void {
    if (ruleId) {
      this.ignoredRules.add(ruleId);
      this.save();
    }
  }

  public ignoreWord(word: string): void {
    const clean = word.toLowerCase().trim();
    if (clean) {
      this.ignoredWords.add(clean);
      this.save();
    }
  }

  public isRuleIgnored(ruleId: string): boolean {
    return this.ignoredRules.has(ruleId);
  }

  public isWordIgnored(word: string): boolean {
    return this.ignoredWords.has(word.toLowerCase().trim());
  }

  public getIgnoredRules(): Set<string> {
    return new Set(this.ignoredRules);
  }

  public getIgnoredWords(): Set<string> {
    return new Set(this.ignoredWords);
  }

  public clear(): void {
    this.ignoredRules.clear();
    this.ignoredWords.clear();
    this.save();
  }
}
