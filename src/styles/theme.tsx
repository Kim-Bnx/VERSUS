import { createTheme, MantineTheme } from '@mantine/core';

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
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.colors.blue[9],
          color: theme.white,
          textDecoration: 'none',
          '&:hover': {
            backgroundColor: '#FFFFFF',
          },

          '&:active': {
            backgroundColor: theme.colors.blue[8], // Background color when button is active
            color: theme.colors.blue[8], // Color when button is active
          },
        },
      }),
    },
  },

  fontFamily: 'Open Sans, sans-serif',
});

const theme = themeProps;

export default theme;
