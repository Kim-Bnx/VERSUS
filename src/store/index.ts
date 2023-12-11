import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/login';
import eventReducer from './reducers/event';
import newEventReducer from './reducers/createEvent';
import updateEventReducer from './reducers/updateEvent';

const store = configureStore({
  reducer: {
    login: loginReducer,
    event: eventReducer,
    newEvent: newEventReducer,
    updatedEvent: updateEventReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
