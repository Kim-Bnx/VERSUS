import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { SearchState } from '../../@types';

const initialState: SearchState = {
  isLoading: false,
  error: null,
  searchTerm: '',
  searchResults: [
    {
      id: null,
      title: '',
      title_slug: null,
      start_date: '',
      end_date: '',
      banner: null,
      thumbnail: null,
      location: '',
      status: '',
      description: '',
      rules: null,
      contact: '',
      createdAt: '',
      updatedAt: null,
      type_event_id: null,
      game_id: null,
      user_id: null,
      game: {
        id: null,
        name: '',
        thumbnail: '',
        createdAt: '',
        updatedAt: null,
      },
      organizer: {
        id: null,
        username: '',
        email: '',
        password: '',
        avatar: null,
        createdAt: '',
        updatedAt: null,
        role_id: null,
      },
      type_event: {
        id: null,
        name: '',
        createdAt: '',
        updatedAt: null,
      },
    },
  ],
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
