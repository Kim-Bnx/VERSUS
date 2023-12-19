import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProfileGamesState } from '../../@types';
import { axiosInstance } from '../../utils/axios';

const initialState: ProfileGamesState = {
  games: [],
  error: null,
  isSuccess: false,
};

export const userGames = createAsyncThunk(
  'userGames',
  async ({ game_id, userId }: { game_id: number[]; userId: number | null }) => {
    const { data } = await axiosInstance.patch(
      `http://localhost:3000/user/${userId}/preferences/games`,
      { game_id }
    );

    return data;
  }
);

const userGamesSlice = createSlice({
  name: 'userGames',
  initialState,
  reducers: {},
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

// export const {} = userGamesSlice.actions;
export default userGamesSlice.reducer;
