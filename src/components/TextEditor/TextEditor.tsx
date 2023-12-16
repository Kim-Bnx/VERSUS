import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

import '@mantine/tiptap/styles.css';

function TextEditor({ setEventRules }) {
  const editor = useEditor({
    extensions: [StarterKit],

    // eslint-disable-next-line @typescript-eslint/no-shadow
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setEventRules(html);
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
