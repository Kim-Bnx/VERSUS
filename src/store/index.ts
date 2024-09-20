import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/login';
import eventReducer from './reducers/event';
import eventsReducer from './reducers/events';
import newEventReducer from './reducers/createEvent';
import deleteEventReducer from './reducers/deleteEvent';
import publishEventReducer from './reducers/publishEvent';
import updateEventReducer from './reducers/updateEvent';
import registerEventReducer from './reducers/registerEvent';
import unregisterEventReducer from './reducers/unregisterEvent';
import searchReducer from './reducers/search';
import signupReducer from './reducers/signup';
import loggedUserReducer from './reducers/loggedUser';
import updateLoggedUserReducer from './reducers/updateLoggedUser';
import userFavGamesReducer from './reducers/userFavGames';
import userGamesReducer from './reducers/userGames';
import userPlatformsReducer from './reducers/userPlatforms';
import profileReducer from './reducers/profile';
import gameReducer from './reducers/game';
import platformReducer from './reducers/platform';
import updatePasswordReducer from './reducers/updatePassword';
import userEventsReducer from './reducers/userEvents';
import resetPasswordReducer from './reducers/resetPassword';

const store = configureStore({
  reducer: {
    login: loginReducer,
    event: eventReducer,
    events: eventsReducer,
    newEvent: newEventReducer,
    updatedEvent: updateEventReducer,
    deleteEvent: deleteEventReducer,
    publishEvent: publishEventReducer,
    registerEvent: registerEventReducer,
    unregisterEvent: unregisterEventReducer,
    search: searchReducer,
    signup: signupReducer,
    loggedUser: loggedUserReducer,
    userEvents: userEventsReducer,
    updateLoggedUser: updateLoggedUserReducer,
    userFavGames: userFavGamesReducer,
    userGames: userGamesReducer,
    userPlatforms: userPlatformsReducer,
    profile: profileReducer,
    game: gameReducer,
    platform: platformReducer,
    updatePassword: updatePasswordReducer,
    resetPassword: resetPasswordReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
