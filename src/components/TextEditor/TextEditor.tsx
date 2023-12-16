import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import DOMPurify from 'dompurify';

import '@mantine/tiptap/styles.css';

type TextEditorProps = {
  setEventRules: (html: string) => void;
  content: string;
};

function TextEditor({ setEventRules, content }: TextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,

    // eslint-disable-next-line @typescript-eslint/no-shadow
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();

      const cleanHTML = DOMPurify.sanitize(html);
      setEventRules(cleanHTML);
    },
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export default TextEditor;
