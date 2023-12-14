import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router';
import store from './store';

// Mantime styles
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import theme from './styles/theme';

// Our custom styles
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
