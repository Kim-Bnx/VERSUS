/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root/Root';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import CreateEvent from './pages/CreateEvent/CreateEvent';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />, // TODO edit the error component. Needs Header and Navbar
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'event/create',
        element: <CreateEvent />,
      },
      {
        path: 'event/:slug',
        element: <Event />,
      },
      {
        // route for the connected user to see his profile
        path: 'profile',
        element: <Profile />,
      },
      {
        // route for the connected user to see researched user's profile
        path: 'profile/:username',
        // ! EDIT CDC
        element: <Profile />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
]);
