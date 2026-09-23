export declare class PersonalDictionaryManager {
    private words;
    private listeners;
    constructor();
    private loadFromStorage;
    private saveToStorage;
    add(word: string): void;
    remove(word: string): void;
    has(word: string): boolean;
    getAll(): string[];
    getSet(): Set<string>;
    exportJson(): string;
    importJson(jsonString: string): number;
    subscribe(cb: (words: string[]) => void): () => void;
    private notify;
}
//# sourceMappingURL=dictionary.d.ts.map