export type UserState = {
  data: UserData;
  error: null | string;
};

export type UserData = {
  id: number;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  avatar: string;
};

export type ProfileState = {
  data: {
    username: string;
    id: number;
    avatar: string;
  };
  error: null | string;
};
