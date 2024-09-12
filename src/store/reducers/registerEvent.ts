import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstanceToken } from '../../utils/axios';
import { RegistrationState, UserRegistration } from '../../@types/event';

const initialState: RegistrationState = {
  isRegistered: false,
  error: null,
};

export const registerToEvent = createAsyncThunk(
  'event/register',
  async ({ event_id, user_id }: UserRegistration) => {
    const { data } = await axiosInstanceToken.patch(
      `/event/${event_id}/register`,
      { user_id }
    );

    return data;
  }
);

const registerEventSlice = createSlice({
  name: 'registerEvent',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerToEvent.fulfilled, (state) => {
      state.isRegistered = true;
    });
  },
});

export default registerEventSlice.reducer;
