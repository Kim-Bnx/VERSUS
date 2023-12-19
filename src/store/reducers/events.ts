import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { EventsState } from '../../@types/event';

const initialState: EventsState = {
  events: [],
  isLoading: true,
  modified: false,
  error: null,
};

// TODO don't forget to change /events to /events/published once the db has been set with published events
export const fetchAllEvents = createAsyncThunk('event/fetchAll', async () => {
  const { data } = await axios.get(`http://localhost:3000/events`);
  return data;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEvents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllEvents.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Impossible de récupérer les events';
      })
      .addCase(fetchAllEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      });
  },
});

export default eventsSlice.reducer;
