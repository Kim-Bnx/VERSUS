import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TypeState, TypeList } from '../../@types/eventType';
import { axiosInstance } from '../../utils/axios';

const initialState: TypeState = {
  types: [],
  error: null,
};

export const fetchEventTypes = createAsyncThunk('type', async () => {
  const { data } = await axiosInstance.get(`/types`);
  return data;
});

const eventTypesSlice = createSlice({
  name: 'eventTypes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEventTypes.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchEventTypes.rejected, (state) => {
        state.error = "Requête des types d'événement rejetée";
      })
      .addCase(fetchEventTypes.fulfilled, (state, action) => {
        state.types = action.payload as TypeList[];
        state.error = null;
      });
  },
});

export default eventTypesSlice.reducer;
