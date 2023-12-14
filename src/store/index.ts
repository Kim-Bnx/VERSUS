import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/login';
import searchReducer from './reducers/search';
import signupReducer from './reducers/signup';
import profileReducer from './reducers/profile';

const store = configureStore({
  reducer: {
    login: loginReducer,
    search: searchReducer,
    signup: signupReducer,
    profile: profileReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
