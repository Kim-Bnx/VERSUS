export type UserState = {
  data: UserData;
  error: null | string;
};

export type UserData = {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  avatar: string;
};
