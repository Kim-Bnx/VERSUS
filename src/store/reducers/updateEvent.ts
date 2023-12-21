import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstanceToken } from '../../utils/axios';
import { EventState, Event } from '../../@types/event';
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
    game: {
      id: null,
      name: '',
      thumbnail: '',
      createdAt: '',
      updatedAt: null,
    },
    game_id: 0,
    platform: {
      id: null,
      name: '',
      createdAt: '',
      updatedAt: '',
    },
    platform_id: 0,
    user_id: 0,
    organizer: UserData,
    participants: [],
  },
  isLoading: true,
  modified: false,
  error: null,
};

export const updateEvent = createAsyncThunk(
  'event/update',
  async (updatedData: Event) => {
    const { data } = await axiosInstanceToken.patch(
      `/event/${updatedData.id}`,
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
    });
  },
});

export const { changeTextEditorValue } = updateEventSlice.actions;
export default updateEventSlice.reducer;
