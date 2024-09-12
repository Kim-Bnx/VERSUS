import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EventsState } from '../../@types/event';
import { axiosInstance } from '../../utils/axios';

const initialState: EventsState = {
  events: [],
  isLoading: true,
  modified: false,
  error: null,
};

export const fetchAllEvents = createAsyncThunk('event/fetchAll', async () => {
  const { data } = await axiosInstance.get(`/events/published`);
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
