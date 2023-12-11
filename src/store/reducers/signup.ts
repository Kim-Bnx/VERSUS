import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { SignupState, SignupValues } from '../../@types';

const initialState: SignupState = {
  userValues: {
    email: '',
    password: '',
    confirmPassword: '',
    pseudo: '',
    avatar: '',
    games: {
      id: null,
      name: '',
    },
    platforms: {
      id: null,
      name: ',',
    },
  },
  isLoading: false,
};

export const signup = createAsyncThunk(
  'Signup',
  async (userValues: SignupValues) => {
    const { data } = await axios.post(
      'http://localhost:3000/signup',
      userValues
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
        fieldName: keyof SignupValues;
        value: string;
      }>
    ) {
      const { fieldName, value } = action.payload;

      const updatedUserValues = {
        ...state.userValues,
        [fieldName]:
          fieldName === 'games' || fieldName === 'platforms'
            ? { ...state.userValues[fieldName], name: value }
            : value,
      };

      return {
        ...state,
        userValues: updatedUserValues,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(signup.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export const { changeInputSignupValue } = signupSlice.actions;
export default signupSlice.reducer;
