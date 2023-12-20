import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GameState, GameList } from '../../@types/game';

const initialState: GameState = {
  games: [],
  error: null,
};

export const fetchGames = createAsyncThunk('game', async () => {
  const { data } = await axios.get(`http://localhost:3000/games`);
  return data;
});

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.error = 'Requête des jeux rejetée';
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.games = action.payload as GameList[];
        state.error = null;
      });
  },
});

export default gameSlice.reducer;