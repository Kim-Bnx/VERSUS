import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { NewEventState, NewEvent } from '../../@types/event';

const initialState: NewEventState = {
  title: '',
  title_slug: '',
  start_date: '',
  end_date: '',
  isLoading: false,
  error: null,
};

export const createEvent = createAsyncThunk(
  'event/create',
  async (event: NewEvent) => {
    const { data } = await axios.post('http://localhost:3000/event', event);
    return data;
  }
);

const newEventSlice = createSlice({
  name: 'newEvent',
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

export const { changeInputEventValue } = newEventSlice.actions;
export default newEventSlice.reducer;
