import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
import { Editor } from '@tiptap/react';
import { RichTextEditorLabels } from './labels';
import { RichTextEditorToolbar } from './RichTextEditorToolbar/RichTextEditorToolbar';
import { RichTextEditorControlsGroup } from './RichTextEditorControlsGroup/RichTextEditorControlsGroup';
import { RichTextEditorContent } from './RichTextEditorContent/RichTextEditorContent';
import { RichTextEditorControl } from './RichTextEditorControl/RichTextEditorControl';
import * as controls from './RichTextEditorControl';
export type RichTextEditorStylesNames = 'linkEditorSave' | 'linkEditorDropdown' | 'root' | 'content' | 'typographyStylesProvider' | 'control' | 'controlsGroup' | 'toolbar' | 'linkEditor' | 'linkEditorInput' | 'linkEditorExternalControl';
export interface RichTextEditorProps extends BoxProps, StylesApiProps<RichTextEditorFactory>, ElementProps<'div'> {
    /** Tiptap editor instance */
    editor: Editor | null;
    /** Determines whether code highlight styles should be added, `true` by default */
    withCodeHighlightStyles?: boolean;
    /** Determines whether typography styles should be added, `true` by default */
    withTypographyStyles?: boolean;
    /** Labels that are used in controls */
    labels?: Partial<RichTextEditorLabels>;
    /** Child editor components */
    children: React.ReactNode;
}
export type RichTextEditorFactory = Factory<{
    props: RichTextEditorProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorStylesNames;
    staticComponents: {
        Content: typeof RichTextEditorContent;
        Control: typeof RichTextEditorControl;
        Toolbar: typeof RichTextEditorToolbar;
        ControlsGroup: typeof RichTextEditorControlsGroup;
        Bold: typeof controls.BoldControl;
        Italic: typeof controls.ItalicControl;
        Strikethrough: typeof controls.StrikeThroughControl;
        Underline: typeof controls.UnderlineControl;
        ClearFormatting: typeof controls.ClearFormattingControl;
        H1: typeof controls.H1Control;
        H2: typeof controls.H2Control;
        H3: typeof controls.H3Control;
        H4: typeof controls.H4Control;
        H5: typeof controls.H5Control;
        H6: typeof controls.H6Control;
        BulletList: typeof controls.BulletListControl;
        OrderedList: typeof controls.OrderedListControl;
        Link: typeof controls.RichTextEditorLinkControl;
        Unlink: typeof controls.UnlinkControl;
        Blockquote: typeof controls.BlockquoteControl;
        AlignLeft: typeof controls.AlignLeftControl;
        AlignRight: typeof controls.AlignRightControl;
        AlignCenter: typeof controls.AlignCenterControl;
        AlignJustify: typeof controls.AlignJustifyControl;
        Superscript: typeof controls.SuperscriptControl;
        Subscript: typeof controls.SubscriptControl;
        Code: typeof controls.CodeControl;
        CodeBlock: typeof controls.CodeBlockControl;
        ColorPicker: typeof controls.RichTextEditorColorPickerControl;
        Color: typeof controls.RichTextEditorColorControl;
        Highlight: typeof controls.HighlightControl;
        Hr: typeof controls.HrControl;
        UnsetColor: typeof controls.UnsetColorControl;
    };
}>;
export declare const RichTextEditor: import("@mantine/core").MantineComponent<{
    props: RichTextEditorProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorStylesNames;
    staticComponents: {
        Content: typeof RichTextEditorContent;
        Control: typeof RichTextEditorControl;
        Toolbar: typeof RichTextEditorToolbar;
        ControlsGroup: typeof RichTextEditorControlsGroup;
        Bold: typeof controls.BoldControl;
        Italic: typeof controls.ItalicControl;
        Strikethrough: typeof controls.StrikeThroughControl;
        Underline: typeof controls.UnderlineControl;
        ClearFormatting: typeof controls.ClearFormattingControl;
        H1: typeof controls.H1Control;
        H2: typeof controls.H2Control;
        H3: typeof controls.H3Control;
        H4: typeof controls.H4Control;
        H5: typeof controls.H5Control;
        H6: typeof controls.H6Control;
        BulletList: typeof controls.BulletListControl;
        OrderedList: typeof controls.OrderedListControl;
        Link: typeof controls.RichTextEditorLinkControl;
        Unlink: typeof controls.UnlinkControl;
        Blockquote: typeof controls.BlockquoteControl;
        AlignLeft: typeof controls.AlignLeftControl;
        AlignRight: typeof controls.AlignRightControl;
        AlignCenter: typeof controls.AlignCenterControl;
        AlignJustify: typeof controls.AlignJustifyControl;
        Superscript: typeof controls.SuperscriptControl;
        Subscript: typeof controls.SubscriptControl;
        Code: typeof controls.CodeControl;
        CodeBlock: typeof controls.CodeBlockControl;
        ColorPicker: typeof controls.RichTextEditorColorPickerControl;
        Color: typeof controls.RichTextEditorColorControl;
        Highlight: typeof controls.HighlightControl;
        Hr: typeof controls.HrControl;
        UnsetColor: typeof controls.UnsetColorControl;
    };
}>;
//# sourceMappingURL=RichTextEditor.d.ts.map