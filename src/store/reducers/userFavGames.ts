import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserFavGamesState } from '../../@types';
import { axiosInstance } from '../../utils/axios';

const initialState: UserFavGamesState = {
  games: [],
  error: null,
  isSuccess: false,
};

export const fetchAllUserFavGames = createAsyncThunk(
  'userFavGames',
  async (userId: number | null) => {
    const { data } = await axiosInstance.get(`/user/${userId}`);

    return data;
  }
);

const userFavGamesSlice = createSlice({
  name: 'userFavGames',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllUserFavGames.pending, (state) => {
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(fetchAllUserFavGames.rejected, (state) => {
        state.error = "Impossible de récuperer les jeux de l'utilisateurs";
        state.isSuccess = false;
      })
      .addCase(fetchAllUserFavGames.fulfilled, (state, action) => {
        state.error = null;
        state.isSuccess = true;
        state.games = action.payload.games;
      });
  },
});

export default userFavGamesSlice.reducer;
