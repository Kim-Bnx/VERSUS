import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';
import { PasswordChangeState, NewPassword } from '../../@types/user';

const initialState: PasswordChangeState = {
  data: {
    id: 0,
    password: '',
    confirmPassword: '',
  },
  error: null,
};

export const patchPassword = createAsyncThunk(
  'passwordChange',
  async (newUserData: NewPassword) => {
    const { data } = await axiosInstance.patch(
      `http://localhost:3000/user/${newUserData.id}/edit/password`,
      {
        password: newUserData.password,
        confirmation: newUserData.confirmPassword,
      }
    );

    return data;
  }
);

const gameSlice = createSlice({
  name: 'passwordChange',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(patchPassword.pending, (state) => {
        state.error = null;
      })
      .addCase(patchPassword.rejected, (state) => {
        state.error = 'Requête des jeux rejetée';
      })
      .addCase(patchPassword.fulfilled, (state) => {
        state.error = null;
      });
  },
});

export default gameSlice.reducer;
