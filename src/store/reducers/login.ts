import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginCredentials, LoginState } from '../../@types';
import { axiosInstance } from '../../utils/axios';
import { LocalStorage } from '../../utils/LocalStorage';

const initialState: LoginState = {
  credentials: {
    email: '',
    password: '',
  },
  auth: {
    userId: null,
    token: '',
  },
  isConnected: false,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk(
  'login',
  async (credentials: LoginCredentials) => {
    const { data } = await axiosInstance.post(
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
    logout(state) {
      LocalStorage.removeItem('auth');
      state.isConnected = false;
      state.auth.token = '';
      state.auth.userId = null;
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
      .addCase(login.fulfilled, (state, action) => {
        const responseData = action.payload;

        state.isConnected = responseData.isConnected;
        state.isLoading = false;
        state.auth = {
          userId: responseData.userId,
          token: responseData.token,
        };

        localStorage.setItem('auth', JSON.stringify(state.auth));
      });
  },
});

export const { changeInputLoginValue, logout } = loginSlice.actions;
export default loginSlice.reducer;
