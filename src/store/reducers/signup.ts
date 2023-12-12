import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  SignupState,
  SignupCredentials,
  NewUserData,
  GamesPlatformsArray,
} from '../../@types';

const initialState: SignupState = {
  credentials: {
    email: '',
    password: '',
    confirmation: '',
  },
  accountInfos: {
    username: '',
    avatar: '',
    gamesPlatformsList: { games: [], platforms: [] },
  },
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const signup = createAsyncThunk(
  'signup',
  async (credentials: SignupCredentials) => {
    const { data } = await axios.post(
      'http://localhost:3000/signup',
      credentials
    );

    return data;
  }
);

export const addAccountData = createAsyncThunk(
  'addAccountData',
  async (accountInfos: NewUserData) => {
    const { data } = await axios.patch(
      'http://localhost:3000/user/',
      accountInfos
    );

    return data;
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    changeInputSignupValue(
      state,
      action: PayloadAction<{
        fieldName: keyof SignupState['credentials'];
        value: string;
      }>
    ) {
      const { fieldName, value } = action.payload;
      state.credentials[fieldName] = value;
    },

    changeInfosUserValue(
      state,
      action: PayloadAction<{
        fieldName: keyof NewUserData;
        value: string | number[];
      }>
    ) {
      const { fieldName, value } = action.payload;

      const updatedAccountValues = {
        ...state.accountInfos,
        [fieldName]: value,
      };

      return {
        ...state,
        accountInfos: updatedAccountValues,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(signup.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = 'Enregistrement rejeté';
      })
      .addCase(signup.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.error = null;
      });
  },
});

export const { changeInputSignupValue, changeInfosUserValue } =
  signupSlice.actions;
export default signupSlice.reducer;
