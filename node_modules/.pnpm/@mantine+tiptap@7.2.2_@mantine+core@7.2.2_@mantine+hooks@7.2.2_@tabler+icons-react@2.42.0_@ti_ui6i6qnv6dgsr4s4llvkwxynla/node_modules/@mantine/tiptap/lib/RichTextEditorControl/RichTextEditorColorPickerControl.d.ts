import React from 'react';
import { BoxProps, PopoverProps, ColorPickerProps, ElementProps } from '@mantine/core';
export interface RichTextEditorColorPickerControlProps extends BoxProps, ElementProps<'button'> {
    /** Props added to Popover component */
    popoverProps?: Partial<PopoverProps>;
    /** Props added to ColorPicker component */
    colorPickerProps?: Partial<ColorPickerProps>;
    /** List of colors that the user can choose from */
    colors: string[];
}
export declare const RichTextEditorColorPickerControl: React.ForwardRefExoticComponent<RichTextEditorColorPickerControlProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=RichTextEditorColorPickerControl.d.ts.map