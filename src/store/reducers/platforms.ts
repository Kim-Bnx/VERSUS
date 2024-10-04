import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PlatformState, PlatformList } from '../../@types/platform';
import { axiosInstance } from '../../utils/axios';

const initialState: PlatformState = {
  platforms: [],
  error: null,
};

export const fetchPlatforms = createAsyncThunk('platform', async () => {
  const { data } = await axiosInstance.get(`/platforms`);
  return data;
});

const platformsSlice = createSlice({
  name: 'platforms',
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

export default platformsSlice.reducer;
