import React, { useEffect, forwardRef } from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, Link } from '@mantine/tiptap';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import DOMPurify from 'dompurify';

import './TextEditor.scss';

type TextEditorProps = {
  setEventRules: (html: string) => void;
  content: string | undefined;
};

const TextEditor = forwardRef<HTMLDivElement, TextEditorProps>(
  ({ setEventRules, content = '' }, ref) => {
    const editorInstance = useEditor({
      extensions: [
        StarterKit,
        Underline,
        Link,
        Superscript,
        SubScript,
        Highlight,
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
      ],
      content,
      onUpdate: ({ editor }) => {
        const html = editor.getHTML();
        const cleanHTML = DOMPurify.sanitize(html);
        setEventRules(cleanHTML);
      },
      editorProps: {
        handleKeyDown: (view, event) => {
          if (event.key === ' ') {
            // Allow the default space bar behavior
            return false; // Returning false allows the default space handling
          }
          return false; // Allow other handlers to process the event
        },
      },
    });

    useEffect(() => {
      if (editorInstance) {
        editorInstance.commands.setContent(content || '');
      }
    }, [content, editorInstance]);

    return (
      <RichTextEditor editor={editorInstance} ref={ref}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    );
  }
);

// Set the display name for better debugging
TextEditor.displayName = 'TextEditor';

export default TextEditor;
