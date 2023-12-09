/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root/Root';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import Profile from './pages/Profile/Profile';
import Auth from './pages/Auth/Auth';
import Register from './pages/Auth/Register/Register';
import Login from './pages/Auth/Login/Login';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import About from './pages/Footer/About/Abouts';
import Contact from './pages/Footer/Contact/Contact';
import Terms from './pages/Footer/Terms/Terms';

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
        // route for the connected user to see researched user's profile or his own
        path: 'profile/:username',
        // ! EDIT CahierDesCharge
        element: <Profile />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
    ],
  },
  {
    element: <Auth />,
    children: [
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/sign-in',
        element: <Login />,
      },
    ],
  },
]);
