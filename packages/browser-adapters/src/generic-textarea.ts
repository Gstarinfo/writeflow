import { EditorAdapter, EditorAdapterEvents } from './adapter.js';
import { SelectionRange } from '@writeflow/document-model';

export class GenericTextareaAdapter extends EditorAdapter {
  protected inputElement: HTMLTextAreaElement | HTMLInputElement;
  private onInputBound: () => void;
  private onSelectBound: () => void;
  private onFocusBound: () => void;
  private onBlurBound: () => void;

  constructor(element: HTMLTextAreaElement | HTMLInputElement, events: EditorAdapterEvents = {}) {
    super(element, events);
    this.inputElement = element;

    this.onInputBound = () => this.events.onTextChanged?.(this.getText());
    this.onSelectBound = () => this.events.onSelectionChanged?.(this.getSelection());
    this.onFocusBound = () => this.events.onFocus?.();
    this.onBlurBound = () => this.events.onBlur?.();

    this.inputElement.addEventListener('input', this.onInputBound);
    this.inputElement.addEventListener('keyup', this.onSelectBound);
    this.inputElement.addEventListener('mouseup', this.onSelectBound);
    this.inputElement.addEventListener('focus', this.onFocusBound);
    this.inputElement.addEventListener('blur', this.onBlurBound);
  }

  public getText(): string {
    return this.inputElement.value || '';
  }

  public getSelection(): SelectionRange {
    const start = this.inputElement.selectionStart || 0;
    const end = this.inputElement.selectionEnd || 0;
    const text = this.inputElement.value.slice(start, end);
    return { start, end, text };
  }

  public replaceRange(start: number, end: number, replacement: string): void {
    const val = this.inputElement.value;
    const before = val.slice(0, start);
    const after = val.slice(end);
    this.inputElement.value = before + replacement + after;

    const newCursor = start + replacement.length;
    this.inputElement.setSelectionRange(newCursor, newCursor);

    // Trigger input event
    this.inputElement.dispatchEvent(new Event('input', { bubbles: true }));
    this.events.onTextChanged?.(this.inputElement.value);
  }

  public focus(): void {
    this.inputElement.focus();
  }

  public destroy(): void {
    this.inputElement.removeEventListener('input', this.onInputBound);
    this.inputElement.removeEventListener('keyup', this.onSelectBound);
    this.inputElement.removeEventListener('mouseup', this.onSelectBound);
    this.inputElement.removeEventListener('focus', this.onFocusBound);
    this.inputElement.removeEventListener('blur', this.onBlurBound);
  }
}
