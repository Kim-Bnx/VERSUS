import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
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
  async (newPasswordData: NewPassword, { rejectWithValue }) => {
    let requestData;
    let response;

    try {
      if (newPasswordData.token && newPasswordData.email) {
        requestData = {
          password: newPasswordData.password,
          confirmation: newPasswordData.confirmPassword,
          token: newPasswordData.token,
        };
        response = await axiosInstanceToken.patch(
          `/reset-password`,
          requestData
        );
      } else {
        requestData = {
          password: newPasswordData.password,
          confirmation: newPasswordData.confirmPassword,
        };

        response = await axiosInstanceToken.patch(
          `/user/${newPasswordData.id}/edit/password`,
          requestData
        );
      }

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 400) {
          const errorMessage =
            error.response.data.error || error.response.data.message;
          if (
            errorMessage === 'New password cannot be the same as the old one.'
          ) {
            return rejectWithValue(
              "Le nouveau mot de passe doit être différent de l'ancien."
            );
          }
        }
      }
      return rejectWithValue('Un problème est survenu. Veuillez réessayer.');
    }
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
      .addCase(updatePassword.rejected, (state, action) => {
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Un problème est survenu. Veuillez réessayer.';
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.error = null;
        state.success =
          'La modification du mot de passe est effectué. Vous pouvez vous connecter à votre compte.';
      });
  },
});

export default updatePasswordSlice.reducer;
