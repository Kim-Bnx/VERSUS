import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { EventState, Event } from '../../@types/event';

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
    type_event: '',
    type_event_id: 0,
    game: '',
    game_id: 0,
    plateform: '',
    plateform_id: 0,
    user_id: 0,
    participants: [],
  },
  isLoading: true,
  modified: false,
  error: null,
};

export const updateEvent = createAsyncThunk(
  'event/update',
  async (updatedData: Event) => {
    const { data } = await axios.patch(
      `http://localhost:3000/event/${updatedData.id}`,
      updatedData
    );

    return data;
  }
);

const updateEventSlice = createSlice({
  name: 'updatedEvent',
  initialState,
  reducers: {
    changeTextEditorValue(state, action: PayloadAction<string>) {
      state.event.rules = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(updateEvent.fulfilled, (state) => {
      state.isLoading = false;
      state.modified = true;
      console.log('event updated');
    });
  },
});

export const { changeTextEditorValue } = updateEventSlice.actions;
export default updateEventSlice.reducer;
