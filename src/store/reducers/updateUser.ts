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
  },
  isSuccess: false,
  error: null,
};

export const updateUser = createAsyncThunk(
  'updateUser',
  async ({
    accountInfos,
    userId,
  }: {
    accountInfos: UserData;
    userId: number | null;
  }) => {
    const { data } = await axios.patch(
      `http://localhost:3000/user/${userId}`,
      accountInfos
    );

    return data;
  }
);

const updateUserSlice = createSlice({
  name: 'updateUser',
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
      .addCase(updateUser.pending, (state) => {
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(updateUser.rejected, (state) => {
        state.error = 'Modification rejeté';
        state.isSuccess = false;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.error = null;
        state.isSuccess = true;
      });
  },
});

export const { changeInputUserValue } = updateUserSlice.actions;
export default updateUserSlice.reducer;
