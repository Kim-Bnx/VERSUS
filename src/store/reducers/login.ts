import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginCredentials, LoginState } from '../../@types';

const initialState: LoginState = {
  isConnected: false,
  credentials: {
    email: '',
    password: '',
  },
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk(
  'login',
  async (credentials: LoginCredentials) => {
    const { data } = await axios.post(
      'http://localhost:3000/login',
      credentials
    );

    return data;
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeInputLoginValue(
      state,
      action: PayloadAction<{
        fieldName: keyof LoginState['credentials'];
        value: string;
      }>
    ) {
      const { fieldName, value } = action.payload;
      state.credentials[fieldName] = value;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.rejected, (state) => {
        state.error = 'Email ou mot de passe incorrect';
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state) => {
        state.isConnected = true;
        state.isLoading = false;
      });
  },
});

export const { changeInputLoginValue } = loginSlice.actions;
export default loginSlice.reducer;
