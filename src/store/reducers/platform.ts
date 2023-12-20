import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PlatformState, PlatformList } from '../../@types/platform';

const initialState: PlatformState = {
  platforms: [],
  error: null,
};

export const fetchPlatforms = createAsyncThunk('platform', async () => {
  const { data } = await axios.get(`http://localhost:3000/platforms`);
  return data;
});

const platformSlice = createSlice({
  name: 'platform',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPlatforms.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchPlatforms.rejected, (state) => {
        state.error = 'Requête des platformes rejetée';
      })
      .addCase(fetchPlatforms.fulfilled, (state, action) => {
        state.platforms = action.payload as PlatformList[];
        state.error = null;
      });
  },
});

export default platformSlice.reducer;
