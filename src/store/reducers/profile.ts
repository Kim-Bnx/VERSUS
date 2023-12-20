import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProfileState } from '../../@types/user';

const initialState: ProfileState = {
  data: {
    id: 0,
    username: '',
    avatar: '',
    events: [],
    organize: [],
    games: [],
    platforms: [],
    createdAt: '',
  },
  error: null,
};

export const profile = createAsyncThunk('profile', async (username: string) => {
  const { data } = await axios.get(`http://localhost:3000/user/${username}`);

  return data;
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(profile.pending, (state) => {
        state.error = null;
      })
      .addCase(profile.rejected, (state) => {
        state.error = 'id incorrect';
      })
      .addCase(profile.fulfilled, (state, action) => {
        const payloadKeys = Object.keys(action.payload);

        payloadKeys.forEach((key) => {
          if (action.payload[key] !== null) {
            state.data[key] = action.payload[key];
          }
        });
      });
  },
});

// export const {  } = profileSlice.actions;
export default profileSlice.reducer;
