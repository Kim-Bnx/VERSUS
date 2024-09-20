import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstanceToken } from '../../utils/axios';
import { UpdatePasswordState, NewPassword } from '../../@types/user';

const initialState: UpdatePasswordState = {
  data: {
    id: 0,
    password: '',
    confirmPassword: '',
    token: null,
  },
  error: null,
  success: null,
};

export const updatePassword = createAsyncThunk(
  'updatePassword',
  async (newPasswordData: NewPassword) => {
    let requestData;
    let response;

    // If the token and email are present, use token password reset, else fallback to id password reset
    if (newPasswordData.token && newPasswordData.email) {
      requestData = {
        password: newPasswordData.password,
        confirmation: newPasswordData.confirmPassword,
        token: newPasswordData.token,
      };

      response = await axiosInstanceToken.patch(`/reset-password`, requestData);
    } else {
      requestData = {
        id: newPasswordData.id,
        password: newPasswordData.password,
        confirmation: newPasswordData.confirmPassword,
      };

      response = await axiosInstanceToken.patch(
        `/user/${newPasswordData.id}/edit/password`,
        requestData
      );
    }

    return response.data;
  }
);

const updatePasswordSlice = createSlice({
  name: 'updatePassword',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(updatePassword.pending, (state) => {
        state.error = null;
        state.success = null;
      })
      .addCase(updatePassword.rejected, (state) => {
        state.error =
          'Un probléme est survenu. Veuillez renvoyer un email depuis la page de reset de password.';
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.error = null;
        state.success =
          'La modification du mot de passe est effectué. Vous pouvez vous connecter à votre compte.';
      });
  },
});

export default updatePasswordSlice.reducer;
