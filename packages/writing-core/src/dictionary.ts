const STORAGE_KEY_DICTIONARY = 'writeflow_personal_dictionary';

export class PersonalDictionaryManager {
  private words: Set<string> = new Set();
  private listeners: Array<(words: string[]) => void> = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
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
    } catch (e) {
      console.warn('[WriteFlow] Could not load dictionary from localStorage', e);
    }
  }

  private saveToStorage(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(
          STORAGE_KEY_DICTIONARY,
          JSON.stringify(Array.from(this.words))
        );
      }
    } catch (e) {
      console.warn('[WriteFlow] Could not save dictionary to localStorage', e);
    }
    this.notify();
  }

  public add(word: string): void {
    const clean = word.toLowerCase().trim();
    if (clean && !this.words.has(clean)) {
      this.words.add(clean);
      this.saveToStorage();
    }
  }

  public remove(word: string): void {
    const clean = word.toLowerCase().trim();
    if (this.words.has(clean)) {
      this.words.delete(clean);
      this.saveToStorage();
    }
  }

  public has(word: string): boolean {
    return this.words.has(word.toLowerCase().trim());
  }

  public getAll(): string[] {
    return Array.from(this.words).sort();
  }

  public getSet(): Set<string> {
    return new Set(this.words);
  }

  public exportJson(): string {
    return JSON.stringify(Array.from(this.words), null, 2);
  }

  public importJson(jsonString: string): number {
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
    } catch (e) {
      console.error('[WriteFlow] Invalid dictionary JSON import', e);
    }
    return 0;
  }

  public subscribe(cb: (words: string[]) => void): () => void {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter(l => l !== cb);
    };
  }

  private notify(): void {
    const list = this.getAll();
    this.listeners.forEach(cb => cb(list));
  }
}
