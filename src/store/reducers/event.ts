import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { EventState } from '../../@types/event';
import { UserData as TUserData } from '../../@types/user';

const UserData: TUserData = {
  id: 0,
  email: '',
  password: '',
  confirmPassword: '',
  username: '',
  avatar: '',
};

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
    organizer: UserData,
    participants: [],
  },
  isLoading: true,
  modified: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEvent.fulfilled, (state, action) => {
        state.isLoading = false;

        const payloadKeys = Object.keys(action.payload);

        payloadKeys.forEach((key) => {
          if (action.payload[key] !== null) {
            state.event[key] = action.payload[key];
          }
        });
      });
  },
});

export default eventSlice.reducer;
