import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProfileState } from '../../@types/user';
import { axiosInstance } from '../../utils/axios';

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
  const { data } = await axiosInstance.get(`/user/${username}`);
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
          // Cast state.data to allow dynamic key access
          (state.data as { [key: string]: any })[key] = action.payload[key];
        });
      });
  },
});

export default profileSlice.reducer;
