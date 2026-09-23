import { SelectionRange } from '@writeflow/document-model';

export interface EditorAdapterEvents {
  onTextChanged?: (text: string) => void;
  onSelectionChanged?: (selection: SelectionRange) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export abstract class EditorAdapter {
  protected element: HTMLElement;
  protected events: EditorAdapterEvents;

  constructor(element: HTMLElement, events: EditorAdapterEvents = {}) {
    this.element = element;
    this.events = events;
  }

  public abstract getText(): string;
  public abstract getSelection(): SelectionRange;
  public abstract replaceRange(start: number, end: number, replacement: string): void;
  public abstract focus(): void;
  public abstract destroy(): void;
  
  public getElement(): HTMLElement {
    return this.element;
  }
}
