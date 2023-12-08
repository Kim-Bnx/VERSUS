import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { NewEvent, NewEventState } from '../../@types';

const initialState: NewEventState = {
  title: '',
  start_date: '',
  end_date: '',
  isLoading: false,
  error: null,
};

export const createEvent = createAsyncThunk(
  'event',
  async (event: NewEvent) => {
    const { data } = await axios.post('http://localhost:3000/event', event);

    return data;
  }
);

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    changeInputEventValue(
      state,
      action: PayloadAction<{
        fieldName: keyof NewEventState;
        value: string;
      }>
    ) {
      const { fieldName, value } = action.payload;
      state[fieldName] = value;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createEvent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createEvent.rejected, (state) => {
        state.error = 'Format de date incorrectes';
        state.isLoading = false;
      })
      .addCase(createEvent.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export const { changeInputEventValue } = eventSlice.actions;
export default eventSlice.reducer;
