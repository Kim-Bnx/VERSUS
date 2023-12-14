import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProfileState, UserData } from '../../@types';

const initialState: ProfileState = {
  data: {
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    avatar: '',
    games: [],
    platforms: [],
  },
  isSuccess: false,
  error: null,
};

export const profile = createAsyncThunk(
  'profile',
  async (accountInfos: UserData) => {
    const { data } = await axios.patch(
      'http://localhost:3000/user/',
      accountInfos
    );

    return data;
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changeInputUserValue(
      state,
      action: PayloadAction<{
        fieldName: keyof UserData;
        value: string | number[];
      }>
    ) {
      const { fieldName, value } = action.payload;

      const updatedProfileValues = {
        ...state.data,
        [fieldName]: value,
      };

      return {
        ...state,
        data: updatedProfileValues,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(profile.pending, (state) => {
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(profile.rejected, (state) => {
        state.error = 'Modification rejeté';
        state.isSuccess = false;
      })
      .addCase(profile.fulfilled, (state) => {
        state.error = null;
        state.isSuccess = true;
      });
  },
});

export const { changeInputUserValue } = profileSlice.actions;
export default profileSlice.reducer;
