import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstanceToken } from '../../utils/axios';

const initialState = {};

export const deleteEvent = createAsyncThunk(
  'event/delete',
  async (id: number) => {
    const { data } = await axiosInstanceToken.delete(`/event/${id}`);
    return data;
  }
);

const deleteEventSlice = createSlice({
  name: 'deleteEvent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteEvent.fulfilled, () => {
      console.log('event deleted');
    });
  },
});

export default deleteEventSlice.reducer;
