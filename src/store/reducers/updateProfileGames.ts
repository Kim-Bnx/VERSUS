import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProfileGamesState } from '../../@types';
import { axiosInstance } from '../../utils/axios';

const initialState: ProfileGamesState = {
  games: [],
  error: null,
  isSuccess: false,
};

export const updateProfileGames = createAsyncThunk(
  'updateProfileGames',
  async ({ games, userId }: { games: number[]; userId: number | null }) => {
    const { data } = await axiosInstance.patch(`/user/${userId}`, games);

    return data;
  }
);

const updateProfileGamesSlice = createSlice({
  name: 'updateProfileGames',
  initialState,
  reducers: {
    changeSelectedGames(
      state,
      action: PayloadAction<{
        value: number[];
      }>
    ) {
      const { value } = action.payload;

      state.games = value;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(updateProfileGames.pending, (state) => {
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(updateProfileGames.rejected, (state) => {
        state.error = 'Jeux rejetés';
        state.isSuccess = false;
      })
      .addCase(updateProfileGames.fulfilled, (state) => {
        state.error = null;
        state.isSuccess = true;
      });
  },
});

export const { changeSelectedGames } = updateProfileGamesSlice.actions;
export default updateProfileGamesSlice.reducer;
