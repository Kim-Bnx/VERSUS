import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
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
    changeInputEventValue(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    changeEventDateEventValue(
      state,
      action: PayloadAction<{
        fieldDate: 'start_date' | 'end_date';
        date: string;
      }>
    ) {
      const { fieldDate, date } = action.payload;
      state[fieldDate] = date;
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

export const { changeInputEventValue, changeEventDateEventValue } =
  eventSlice.actions;
export default eventSlice.reducer;
