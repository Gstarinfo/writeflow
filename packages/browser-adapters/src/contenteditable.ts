import { EditorAdapter, EditorAdapterEvents } from './adapter.js';
import { SelectionRange } from '@writeflow/document-model';

export class ContentEditableAdapter extends EditorAdapter {
  private onInputBound: () => void;
  private onSelectBound: () => void;
  private onFocusBound: () => void;
  private onBlurBound: () => void;

  constructor(element: HTMLElement, events: EditorAdapterEvents = {}) {
    super(element, events);

    this.onInputBound = () => this.events.onTextChanged?.(this.getText());
    this.onSelectBound = () => this.events.onSelectionChanged?.(this.getSelection());
    this.onFocusBound = () => this.events.onFocus?.();
    this.onBlurBound = () => this.events.onBlur?.();

    this.element.addEventListener('input', this.onInputBound);
    this.element.addEventListener('keyup', this.onSelectBound);
    this.element.addEventListener('mouseup', this.onSelectBound);
    this.element.addEventListener('focus', this.onFocusBound);
    this.element.addEventListener('blur', this.onBlurBound);
  }

  public getText(): string {
    return this.element.innerText || this.element.textContent || '';
  }

  public getSelection(): SelectionRange {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) {
      return { start: 0, end: 0 };
    }

    const range = sel.getRangeAt(0);
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(this.element);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const start = preSelectionRange.toString().length;
    const text = range.toString();

    return {
      start,
      end: start + text.length,
      text
    };
  }

  public replaceRange(start: number, end: number, replacement: string): void {
    const current = this.getText();
    const next = current.slice(0, start) + replacement + current.slice(end);
    this.element.innerText = next;
    this.element.dispatchEvent(new Event('input', { bubbles: true }));
    this.events.onTextChanged?.(next);
  }

  public focus(): void {
    this.element.focus();
  }

  public destroy(): void {
    this.element.removeEventListener('input', this.onInputBound);
    this.element.removeEventListener('keyup', this.onSelectBound);
    this.element.removeEventListener('mouseup', this.onSelectBound);
    this.element.removeEventListener('focus', this.onFocusBound);
    this.element.removeEventListener('blur', this.onBlurBound);
  }
}
