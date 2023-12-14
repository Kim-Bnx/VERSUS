import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginCredentials, LoginState } from '../../@types';
import { axiosInstance } from '../../utils/axios';
import { LocalStorage } from '../../utils/LocalStorage';

const userData = LocalStorage.getItem('user');
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
  ...userData,
};

export const login = createAsyncThunk(
  'login',
  async (credentials: LoginCredentials) => {
    const { data } = await axiosInstance.post(
      'http://localhost:3000/login',
      credentials
    );
    const authentification = {
      auth: {
        userId: data.userId,
        token: data.token,
      },
      isConnected: data.isConnected,
    };
    LocalStorage.setItem('user', authentification);
    console.log(localStorage);
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
      LocalStorage.removeItem('user');
      console.log(localStorage);
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
      });
  },
});

export const { changeInputLoginValue, logout } = loginSlice.actions;
export default loginSlice.reducer;
