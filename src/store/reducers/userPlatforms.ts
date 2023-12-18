import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProfilePlatformsState } from '../../@types';

const initialState: ProfilePlatformsState = {
  platforms: [],
  error: null,
  isSuccess: false,
};

export const userPlatforms = createAsyncThunk(
  'userPlatforms',
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

const userPlatformsSlice = createSlice({
  name: 'userPlatforms',
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
      .addCase(userPlatforms.pending, (state) => {
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(userPlatforms.rejected, (state) => {
        state.error = 'Jeux rejetés';
        state.isSuccess = false;
      })
      .addCase(userPlatforms.fulfilled, (state) => {
        state.error = null;
        state.isSuccess = true;
      });
  },
});

export const { changeSelectedPlatforms } = userPlatformsSlice.actions;
export default userPlatformsSlice.reducer;
