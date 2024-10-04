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

export const updateLoggedUser = createAsyncThunk(
  'updateLoggedUser',
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

const updateLoggedUserSlice = createSlice({
  name: 'updateLoggedUser',
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
      .addCase(updateLoggedUser.pending, (state) => {
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(updateLoggedUser.rejected, (state) => {
        state.error = 'Modification rejeté';
        state.isSuccess = false;
      })
      .addCase(updateLoggedUser.fulfilled, (state) => {
        state.error = null;
        state.isSuccess = true;
      });
  },
});

export const { changeInputUserValue } = updateLoggedUserSlice.actions;
export default updateLoggedUserSlice.reducer;
