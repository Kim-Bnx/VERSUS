import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProfileGamesState } from '../../@types';

const initialState: ProfileGamesState = {
  games: [],
  error: null,
  isSuccess: false,
};

export const userGames = createAsyncThunk(
  'userGames',
  async ({ games, userId }: { games: number[]; userId: number | null }) => {
    const { data } = await axios.patch(
      `http://localhost:3000/user/${userId}`,
      games
    );

    return data;
  }
);

const userGamesSlice = createSlice({
  name: 'userGames',
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
      .addCase(userGames.pending, (state) => {
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(userGames.rejected, (state) => {
        state.error = 'Jeux rejetés';
        state.isSuccess = false;
      })
      .addCase(userGames.fulfilled, (state) => {
        state.error = null;
        state.isSuccess = true;
      });
  },
});

export const { changeSelectedGames } = userGamesSlice.actions;
export default userGamesSlice.reducer;
