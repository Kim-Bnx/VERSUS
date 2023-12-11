import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { EventState } from '../../@types/event';

const initialState: EventState = {
  event: {
    id: 0,
    title: '',
    title_slug: '',
    start_date: '',
    end_date: '',
    banner: '',
    thumbnail: '',
    location: '',
    status: '',
    description: '',
    rules: '',
    contact: '',
    type_event: 0,
    game_id: 0,
    user_id: 0,
  },
  isLoading: true,
  error: null,
};

export const fetchEvent = createAsyncThunk(
  'event/fetch',
  async (slug: string) => {
    const { data } = await axios.get(`http://localhost:3000/event/${slug}`);
    return data;
  }
);

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.event = action.payload;
      });
  },
});

export default eventSlice.reducer;
