import React from 'react';
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Link,
  Undo,
  Redo,
  FileText,
  Trash2
} from 'lucide-react';

interface ToolbarProps {
  onFormat: (command: string) => void;
  onUndo: () => void;
  onRedo: () => void;
  onInsertSample: () => void;
  onClear: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onFormat,
  onUndo,
  onRedo,
  onInsertSample,
  onClear
}) => {
  return (
    <div className="wf-toolbar">
      <div className="wf-toolbar-group">
        <button
          className="wf-tool-btn"
          onClick={() => onFormat('bold')}
          title="Bold (Ctrl+B)"
        >
          <Bold size={16} />
        </button>
        <button
          className="wf-tool-btn"
          onClick={() => onFormat('italic')}
          title="Italic (Ctrl+I)"
        >
          <Italic size={16} />
        </button>
        <button
          className="wf-tool-btn"
          onClick={() => onFormat('underline')}
          title="Underline (Ctrl+U)"
        >
          <Underline size={16} />
        </button>
        <button
          className="wf-tool-btn"
          onClick={() => onFormat('strikeThrough')}
          title="Strikethrough"
        >
          <Strikethrough size={16} />
        </button>
      </div>

      <div className="wf-toolbar-divider" />

      <div className="wf-toolbar-group">
        <button
          className="wf-tool-btn"
          onClick={() => onFormat('insertUnorderedList')}
          title="Bullet List"
        >
          <List size={16} />
        </button>
        <button
          className="wf-tool-btn"
          onClick={() => onFormat('insertOrderedList')}
          title="Numbered List"
        >
          <ListOrdered size={16} />
        </button>
        <button
          className="wf-tool-btn"
          onClick={() => {
            const url = prompt('Enter link URL:');
            if (url) onFormat('createLink');
          }}
          title="Insert Link"
        >
          <Link size={16} />
        </button>
      </div>

      <div className="wf-toolbar-divider" />

      <div className="wf-toolbar-group">
        <button className="wf-tool-btn" onClick={onUndo} title="Undo (Ctrl+Z)">
          <Undo size={16} />
        </button>
        <button className="wf-tool-btn" onClick={onRedo} title="Redo (Ctrl+Y)">
          <Redo size={16} />
        </button>
      </div>

      <div className="wf-toolbar-spacer" />

      <div className="wf-toolbar-group">
        <button
          className="wf-tool-btn sample-btn"
          onClick={onInsertSample}
          title="Load test sentences demonstrating grammar & synonym checks"
        >
          <FileText size={15} />
          <span>Sample Text</span>
        </button>
        <button
          className="wf-tool-btn danger-hover"
          onClick={onClear}
          title="Clear Document"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
};
