import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserState } from '../../@types/user';

const initialState: UserState = {
  data: {
    id: null,
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    avatar: '',
    games: [],
    platforms: [],
  },
  error: null,
};

export const loggedUser = createAsyncThunk('user', async (userId: number) => {
  const { data } = await axios.get(`http://localhost:3000/user/${userId}`);

  return data;
});

const userSlice = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loggedUser.pending, (state) => {
        state.error = null;
      })
      .addCase(loggedUser.rejected, (state) => {
        state.error = 'id incorrect';
      })
      .addCase(loggedUser.fulfilled, (state, action) => {
        const payloadKeys = Object.keys(action.payload);

        payloadKeys.forEach((key) => {
          if (action.payload[key] !== null) {
            state.data[key] = action.payload[key];
          }
        });
      });
  },
});

export default userSlice.reducer;
