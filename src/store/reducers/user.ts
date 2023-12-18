import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserState } from '../../@types/user';

const initialState: UserState = {
  data: {
    id: 0,
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    avatar: '',
  },
  error: null,
};

export const user = createAsyncThunk('user', async (userId: number) => {
  const { data } = await axios.get(`http://localhost:3000/user/${userId}`);

  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(user.pending, (state) => {
        state.error = null;
      })
      .addCase(user.rejected, (state) => {
        state.error = 'id incorrect';
      })
      .addCase(user.fulfilled, (state, action) => {
        const payloadKeys = Object.keys(action.payload);

        payloadKeys.forEach((key) => {
          if (action.payload[key] !== null) {
            state.data[key] = action.payload[key];
          }
        });
      });
  },
});

// export const {  } = userSlice.actions;
export default userSlice.reducer;
