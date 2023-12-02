import { createTheme, mergeMantineTheme, DEFAULT_THEME } from '@mantine/core';

// Mantine Theme Definition
const themeOverride = createTheme({
  colorScheme: {
    dark: {
      background: '#1a1a1a',
      primary: '#1a1a1a', // Set the background color
      // Modify other colors as needed
      // For example:
      // primary: '#ffcc00',
      // secondary: '#007bff',
      // accent: '#4caf50',
      // ...
    },
  },
});

const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export default theme;
