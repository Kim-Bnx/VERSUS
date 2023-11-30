import React from 'react';
import { BoxProps, ElementProps } from '@mantine/core';
export interface RichTextEditorColorControlProps extends BoxProps, ElementProps<'button'> {
    /** Color that will be set as text color, for example #ef457e */
    color: string;
}
export declare const RichTextEditorColorControl: React.ForwardRefExoticComponent<RichTextEditorColorControlProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=RichTextEditorColorControl.d.ts.map