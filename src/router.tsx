/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Event from './components/Event/Event';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // TODO edit the error component. Needs Header and Navbar
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'event/:slug',
        element: <Event />,
      },
    ],
  },
]);
