import { createBrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import Error from '.';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // TODO add an error page
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
