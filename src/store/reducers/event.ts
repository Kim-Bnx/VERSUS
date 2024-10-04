import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EventState } from '../../@types/event';
import { UserData as UserDataType } from '../../@types/types';
import { axiosInstance } from '../../utils/axios';

const UserData: UserDataType = {
  id: 0,
  username: '',
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
    type_id: 0,
    game_id: 0,
    platform_id: 0,
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
    const { data } = await axiosInstance.get(`/event/${slug}`);

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
          // Cast state.event to allow dynamic key access
          (state.event as { [key: string]: any })[key] = action.payload[key];
        });
      })
      .addCase(fetchEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
        state.event = initialState.event;
      });
  },
});

export default eventSlice.reducer;
