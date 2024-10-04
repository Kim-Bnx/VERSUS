import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../@types/user';
import { axiosInstance } from '../../utils/axios';

const initialState: UserState = {
  data: {
    id: 0,
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    avatar: '',
    games: [],
    platforms: [],
  },
  error: null,
};

export const loggedUser = createAsyncThunk('user', async (userId: number) => {
  const { data } = await axiosInstance.get(`/user/${userId}`);

  return data;
});

const userSlice = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loggedUser.pending, (state) => {
        state.error = null;
      })
      .addCase(loggedUser.rejected, (state) => {
        state.error = 'id incorrect';
      })
      .addCase(loggedUser.fulfilled, (state, action) => {
        const payloadKeys = Object.keys(action.payload);

        payloadKeys.forEach((key) => {
          // Cast state.data to allow dynamic key access
          (state.data as { [key: string]: any })[key] = action.payload[key];
        });
      });
  },
});

export default userSlice.reducer;
