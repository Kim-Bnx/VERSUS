import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserEventsState } from '../../@types/event';

const initialState: UserEventsState = {
  events: [],
  organize: [],
  error: null,
  isLoading: false,
};

export const fetchUserEvents = createAsyncThunk(
  'userEvents',
  async (userId: number) => {
    const { data } = await axios.get(`http://localhost:3000/user/${userId}`);

    return data;
  }
);

const userEventsSlice = createSlice({
  name: 'userEvents',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserEvents.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchUserEvents.rejected, (state) => {
        state.error = "Impossible de récupérer les events de l'utilisateur";
        state.isLoading = false;
      })
      .addCase(fetchUserEvents.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.events = action.payload.events;
      });
  },
});

export default userEventsSlice.reducer;
