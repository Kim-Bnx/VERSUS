import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProfilePlatformsState } from '../../@types';
import { axiosInstanceToken } from '../../utils/axios';

const initialState: ProfilePlatformsState = {
  platforms: [],
  error: null,
  isSuccess: false,
};

export const userPlatforms = createAsyncThunk(
  'userPlatforms',
  async ({
    platform_id,
    userId,
  }: {
    platform_id: number[];
    userId: number | null;
  }) => {
    const { data } = await axiosInstanceToken.patch(
      `/user/${userId}/preferences/platforms`,
      { platform_id }
    );

    return data;
  }
);

const userPlatformsSlice = createSlice({
  name: 'userPlatforms',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userPlatforms.pending, (state) => {
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(userPlatforms.rejected, (state) => {
        state.error = 'requéte rejetée';
        state.isSuccess = false;
      })
      .addCase(userPlatforms.fulfilled, (state) => {
        state.error = 'null';
        state.isSuccess = true;
      });
  },
});

export default userPlatformsSlice.reducer;
