import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProfileState, UserData } from '../../@types';
import { axiosInstanceToken } from '../../utils/axios';

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

export const loggedUserUpdate = createAsyncThunk(
  'loggedUserUpdate',
  async ({
    userDatas,
    userId,
  }: {
    userDatas: UserData;
    userId: number | null;
  }) => {
    const { data } = await axiosInstanceToken.patch(
      `/user/${userId}`,
      userDatas
    );

    return data;
  }
);

const loggedUserUpdateSlice = createSlice({
  name: 'loggedUserUpdate',
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

      const updatedUserValue = {
        ...state.data,
        [fieldName]: value,
      };

      return {
        ...state,
        data: updatedUserValue,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loggedUserUpdate.pending, (state) => {
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(loggedUserUpdate.rejected, (state) => {
        state.error = 'Modification rejeté';
        state.isSuccess = false;
      })
      .addCase(loggedUserUpdate.fulfilled, (state) => {
        state.error = null;
        state.isSuccess = true;
      });
  },
});

export const { changeInputUserValue } = loggedUserUpdateSlice.actions;
export default loggedUserUpdateSlice.reducer;
