const STORAGE_KEY_DICTIONARY = 'writeflow_personal_dictionary';
export class PersonalDictionaryManager {
    words = new Set();
    listeners = [];
    constructor() {
        this.loadFromStorage();
    }
    loadFromStorage() {
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                const saved = localStorage.getItem(STORAGE_KEY_DICTIONARY);
                if (saved) {
                    const list = JSON.parse(saved);
                    if (Array.isArray(list)) {
                        this.words = new Set(list.map(w => String(w).toLowerCase().trim()));
                    }
                }
            }
        }
        catch (e) {
            console.warn('[WriteFlow] Could not load dictionary from localStorage', e);
        }
    }
    saveToStorage() {
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem(STORAGE_KEY_DICTIONARY, JSON.stringify(Array.from(this.words)));
            }
        }
        catch (e) {
            console.warn('[WriteFlow] Could not save dictionary to localStorage', e);
        }
        this.notify();
    }
    add(word) {
        const clean = word.toLowerCase().trim();
        if (clean && !this.words.has(clean)) {
            this.words.add(clean);
            this.saveToStorage();
        }
    }
    remove(word) {
        const clean = word.toLowerCase().trim();
        if (this.words.has(clean)) {
            this.words.delete(clean);
            this.saveToStorage();
        }
    }
    has(word) {
        return this.words.has(word.toLowerCase().trim());
    }
    getAll() {
        return Array.from(this.words).sort();
    }
    getSet() {
        return new Set(this.words);
    }
    exportJson() {
        return JSON.stringify(Array.from(this.words), null, 2);
    }
    importJson(jsonString) {
        try {
            const parsed = JSON.parse(jsonString);
            if (Array.isArray(parsed)) {
                let addedCount = 0;
                parsed.forEach(item => {
                    const clean = String(item).toLowerCase().trim();
                    if (clean && !this.words.has(clean)) {
                        this.words.add(clean);
                        addedCount++;
                    }
                });
                if (addedCount > 0) {
                    this.saveToStorage();
                }
                return addedCount;
            }
        }
        catch (e) {
            console.error('[WriteFlow] Invalid dictionary JSON import', e);
        }
        return 0;
    }
    subscribe(cb) {
        this.listeners.push(cb);
        return () => {
            this.listeners = this.listeners.filter(l => l !== cb);
        };
    }
    notify() {
        const list = this.getAll();
        this.listeners.forEach(cb => cb(list));
    }
}
//# sourceMappingURL=dictionary.js.map