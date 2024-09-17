import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginCredentials, LoginState } from '../../@types';
import { axiosInstanceToken } from '../../utils/axios';
import { LocalStorage } from '../../utils/LocalStorage';

const userAuthData = LocalStorage.getItem('auth');

const initialState: LoginState = {
  credentials: {
    email: '',
    password: '',
  },
  isConnected: false,
  isLoading: false,
  error: null,
  ...userAuthData,
};

export const login = createAsyncThunk(
  'login',
  async (credentials: LoginCredentials) => {
    const { data } = await axiosInstanceToken.post('/login', credentials);
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
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.rejected, (state) => {
        state.error =
          'Oups... l\u2019email ou le mot de passe n\u2019est pas le bon :/';
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        const responseData = action.payload;

        state.isConnected = true;
        state.isLoading = false;

        const authentification = {
          auth: {
            userId: responseData.userId,
            token: responseData.token,
          },
          isConnected: true,
        };

        LocalStorage.setItem('auth', authentification);
      });
  },
});

export const { changeInputLoginValue, logout } = loginSlice.actions;
export default loginSlice.reducer;
