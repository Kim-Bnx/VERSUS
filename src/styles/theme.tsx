import { createTheme, MantineTheme, ButtonVariant } from '@mantine/core';

const blueVersus: [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
] = [
  '#f2f1f9',
  '#e1dfeb',
  '#c1bcd9',
  '#9e96c7',
  '#8276b7',
  '#7062af',
  '#6657ab',
  '#564896',
  '#4d4086',
  '#413677',
];

// Mantine Theme Definition
const themeProps = createTheme({
  white: '#fff',
  black: '#000',
  colors: {
    blue: blueVersus,
  },
  defaultRadius: 'sm',
  components: {
    Button: {
      styles: (
        theme: MantineTheme,
        { variant }: { variant: ButtonVariant }
      ) => ({
        root: {
          backgroundColor: variant === 'default' ? theme.colors.blue[9] : '',
          color: theme.white,
          textDecoration: 'none',
          transition: 'background-color 0.3s ease',

          '&:active': {
            backgroundColor:
              variant === 'default' ? theme.colors.blue[8] : 'transparent', // Active color for default variant
            color: variant === 'default' ? theme.colors.blue[8] : theme.white, // Maintain text color on active
          },
        },
      }),
    },
  },
  fontFamily: 'Open Sans, sans-serif',
});

const theme = themeProps;

export default theme;
