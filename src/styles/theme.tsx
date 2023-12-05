import { createTheme } from '@mantine/core';

// Mantine Theme Definition
const themeProps = createTheme({
  white: '#fff', // neutral color (e.g. background)
  black: '#000', // contrast color (e.g. text)

  primaryColor: 'blue',
  defaultRadius: 'sm',

  // fontFamily: 'Open Sans, sans-serif',
  // fontFamilyMonospace: 'Inconsolata, monospace',

  /** Controls various styles of h1-h6 elements, used in TypographyStylesProvider and Title components 
    headings: {
      fontFamily: string;
      fontWeight: string;
      sizes: {
        h1: HeadingStyle;
        h2: HeadingStyle;
        h3: HeadingStyle;
        h4: HeadingStyle;
        h5: HeadingStyle;
        h6: HeadingStyle;
      };
    },
    */
});

const theme = themeProps;

export default theme;
