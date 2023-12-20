import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/login';
import eventReducer from './reducers/event';
import eventsReducer from './reducers/events';
import newEventReducer from './reducers/createEvent';
import updateEventReducer from './reducers/updateEvent';
import searchReducer from './reducers/search';
import signupReducer from './reducers/signup';
import userReducer from './reducers/user';
import updateUserReducer from './reducers/updateUser';
import userFavGamesReducer from './reducers/userFavGames';
import userGamesReducer from './reducers/userGames';
import userPlatformsReducer from './reducers/userPlatforms';
import profileReducer from './reducers/profile';
import userEventsReducer from './reducers/userEvents';

const store = configureStore({
  reducer: {
    login: loginReducer,
    event: eventReducer,
    events: eventsReducer,
    newEvent: newEventReducer,
    updatedEvent: updateEventReducer,
    search: searchReducer,
    signup: signupReducer,
    user: userReducer,
    userEvents: userEventsReducer,
    updateUser: updateUserReducer,
    userFavGames: userFavGamesReducer,
    userGames: userGamesReducer,
    userPlatforms: userPlatformsReducer,
    profile: profileReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
