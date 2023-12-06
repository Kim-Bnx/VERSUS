import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DateValue } from '@mantine/dates';
import { Event as EventState } from '../../@types';

const initialState: EventState = {
  title: '',
  schedule: {
    startDate: '',
    endDate: '',
  },
};

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
        fieldDate: keyof EventState['schedule'];
        date: string;
      }>
    ) {
      const { fieldDate, date } = action.payload;
      state.schedule[fieldDate] = date;
    },
  },
});

export const { changeInputEventValue, changeEventDateEventValue } =
  eventSlice.actions;
export default eventSlice.reducer;
