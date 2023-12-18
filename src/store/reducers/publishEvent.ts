import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';

type PublicationValidation = {
  id: number;
  status: string;
};

const initialState = {};

export const publishEvent = createAsyncThunk(
  'event/publish',
  async ({ id, status }: PublicationValidation) => {
    const { data } = await axiosInstance.patch(
      `http://localhost:3000/event/${id}`,
      status
    );
    return data;
  }
);

const publishEventSlice = createSlice({
  name: 'publishEvent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(publishEvent.fulfilled, () => {
      console.log('event published !');
    });
  },
});

export default publishEventSlice.reducer;
