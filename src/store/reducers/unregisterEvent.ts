import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';
import { RegistrationState, UserRegistration } from '../../@types/event';

const initialState: RegistrationState = {
  isRegistered: false,
  error: null,
};

export const unregisterToEvent = createAsyncThunk(
  'event/register',
  async ({ event_id, user_id }: UserRegistration) => {
    const { data } = await axiosInstance.patch(
      `http://localhost:3000/event/${event_id}/unregister`,
      { user_id }
    );
    return data;
  }
);

const unregisterEventSlice = createSlice({
  name: 'unregisterEvent',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(unregisterToEvent.fulfilled, (state) => {
      state.isRegistered = false;
    });
  },
});

export default unregisterEventSlice.reducer;
