import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';

interface ResetPasswordState {
  isLoading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: ResetPasswordState = {
  isLoading: false,
  error: null,
  success: null,
};

export const resetPassword = createAsyncThunk(
  'resetPassword',
  async (email: string) => {
    const response = await axiosInstance.get('/request-password-reset', {
      params: { email },
    });
    return response;
  }
);

const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.success = 'Email envoyé :) Veuillez vérifier votre boîte mail.';
      })
      .addCase(resetPassword.rejected, (state) => {
        state.isLoading = false;
        state.error = "Aucun compte n'est associé à cette adresse email.";
      });
  },
});

export default resetPasswordSlice.reducer;
