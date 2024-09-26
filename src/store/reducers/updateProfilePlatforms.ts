import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProfilePlatformsState } from '../../@types';
import { axiosInstance } from '../../utils/axios';

const initialState: ProfilePlatformsState = {
  platforms: [],
  error: null,
  isSuccess: false,
};

export const updateProfilePlatforms = createAsyncThunk(
  'updateProfilePlatforms',
  async ({
    platforms,
    userId,
  }: {
    platforms: number[];
    userId: number | null;
  }) => {
    const { data } = await axiosInstance.patch(`/user/${userId}`, platforms);

    return data;
  }
);

const updateProfilePlatformsSlice = createSlice({
  name: 'updateProfilePlatforms',
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
      .addCase(updateProfilePlatforms.pending, (state) => {
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(updateProfilePlatforms.rejected, (state) => {
        state.error = 'Jeux rejetés';
        state.isSuccess = false;
      })
      .addCase(updateProfilePlatforms.fulfilled, (state) => {
        state.error = null;
        state.isSuccess = true;
      });
  },
});

export const { changeSelectedPlatforms } = updateProfilePlatformsSlice.actions;
export default updateProfilePlatformsSlice.reducer;
