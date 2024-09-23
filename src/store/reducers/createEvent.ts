import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstanceToken } from '../../utils/axios';
import { NewEventState, NewEvent } from '../../@types/event';

const initialState: NewEventState = {
  title: '',
  title_slug: '',
  start_date: '',
  end_date: '',
  isLoading: false,
  success: null,
  error: null,
};

export const createEvent = createAsyncThunk(
  'event/create',
  async (event: NewEvent) => {
    const { data } = await axiosInstanceToken.post('/event', event);
    return data;
  }
);

const newEventSlice = createSlice({
  name: 'newEvent',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createEvent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createEvent.rejected, (state) => {
        state.error = 'Un problème est survenu. Veuillez réessayer.';
        state.isLoading = false;
      })
      .addCase(createEvent.fulfilled, (state) => {
        state.isLoading = false;
        state.success = `L'événement a été crée avec succés.`;
      });
  },
});

export default newEventSlice.reducer;
