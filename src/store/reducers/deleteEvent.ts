import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';

const initialState = {};

export const deleteEvent = createAsyncThunk(
  'event/delete',
  async (id: number) => {
    const { data } = await axiosInstance.delete(
      `http://localhost:3000/event/${id}`
    );
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
