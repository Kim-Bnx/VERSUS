/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root/Root';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import UserProfile from './pages/Profile/UserProfile/UserProfile';
import MyProfile from './pages/Profile/MyProfile/MyProfile';
import Auth from './pages/Auth/Auth';
import Signup from './pages/Auth/Signup/Signup';
import Login from './pages/Auth/Login/Login';
import ForgottenPassword from './pages/Auth/ForgottenPassword/ForgottenPassword';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import About from './pages/Footer/About/Abouts';
import Contact from './pages/Footer/Contact/Contact';
import Terms from './pages/Footer/Terms/Terms';
import EventSettings from './pages/EventSettings/EventSettings';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import EventAdmin from './components/ProtectedRoute/EventAdmin';
import Populars from './pages/Categories/Populars';
import Upcoming from './pages/Categories/Upcoming';
import UserParticipations from './pages/Profile/UserProfile/UserParticipations';
import UserEventsCreated from './pages/Profile/UserProfile/UserEvents';

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
        path: '/events/populars',
        element: <Populars />,
      },
      {
        path: '/events/upcoming',
        element: <Upcoming />,
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
        path: 'event/:slug/settings',
        element: (
          <EventAdmin>
            <EventSettings />
          </EventAdmin>
        ),
      },
      {
        // route for the connected user to see researched user's profile or his own
        path: 'profile/:username',
        // ! EDIT CahierDesCharge
        element: <UserProfile />,
      },
      {
        path: 'profile/:username/participations',
        element: <UserParticipations />,
      },
      {
        path: 'profile/:username/events',
        element: <UserEventsCreated />,
      },
      {
        // route for the connected user to see researched user's profile or his own
        path: 'profile',
        // ! EDIT CahierDesCharge
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
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
        path: '/sign-up',
        element: <Signup />,
      },
      {
        path: '/sign-in',
        element: <Login />,
      },
      {
        path: '/forgotten-password',
        element: <ForgottenPassword />,
      },
      {
        path: '/reset-password',
        element: <ResetPassword />,
      },
    ],
  },
]);
