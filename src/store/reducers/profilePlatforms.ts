import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProfilePlatformsState } from '../../@types';

const initialState: ProfilePlatformsState = {
  platforms: [],
  error: null,
  isSuccess: false,
};

export const profilePlatforms = createAsyncThunk(
  'profilePlatforms',
  async ({
    platforms,
    userId,
  }: {
    platforms: number[];
    userId: number | null;
  }) => {
    const { data } = await axios.patch(
      `http://localhost:3000/user/${userId}`,
      platforms
    );

    return data;
  }
);

const profilePlatformsSlice = createSlice({
  name: 'profilePlatforms',
  initialState,
  reducers: {
    changeSelectedPlatforms(
      state,
      action: PayloadAction<{
        value: number[];
      }>
    ) {
      const { value } = action.payload;

      state.platforms = value;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(profilePlatforms.pending, (state) => {
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(profilePlatforms.rejected, (state) => {
        state.error = 'Jeux rejetés';
        state.isSuccess = false;
      })
      .addCase(profilePlatforms.fulfilled, (state) => {
        state.error = null;
        state.isSuccess = true;
      });
  },
});

export const { changeSelectedPlatforms } = profilePlatformsSlice.actions;
export default profilePlatformsSlice.reducer;
