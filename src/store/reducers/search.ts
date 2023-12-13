import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { SearchState } from '../../@types/search';

const initialState: SearchState = {
  isLoading: false,
  error: null,
  searchTerm: '',
  searchResults: {
    events: [],
    users: [],
    teams: [],
  },
};

export const search = createAsyncThunk('search', async (searchTerm: string) => {
  const { data } = await axios.get(
    'https://versus-api.onrender.com/search/all',
    {
      params: {
        q: searchTerm,
      },
    }
  );

  return data;
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchInputValue: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(search.pending, (state) => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(search.rejected, (state) => {
        state.error = 'Aucun élément correspondant';
        state.isLoading = false;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.isLoading = false;
      });
  },
});

export const { changeSearchInputValue } = searchSlice.actions;
export default searchSlice.reducer;
