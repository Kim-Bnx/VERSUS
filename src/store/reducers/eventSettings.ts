import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { EventState } from '../../@types/event';

const initialState: EventState = {
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
  isLoading: false,
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
    builder.addCase(fetchEvent.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
    });
  },
});

export const {} = eventSlice.actions;
export default eventSlice.reducer;
