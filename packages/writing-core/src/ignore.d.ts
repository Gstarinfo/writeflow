export declare class IgnoreManager {
    private ignoredRules;
    private ignoredWords;
    constructor();
    private load;
    private save;
    ignoreRule(ruleId: string): void;
    ignoreWord(word: string): void;
    isRuleIgnored(ruleId: string): boolean;
    isWordIgnored(word: string): boolean;
    getIgnoredRules(): Set<string>;
    getIgnoredWords(): Set<string>;
    clear(): void;
}
//# sourceMappingURL=ignore.d.ts.map