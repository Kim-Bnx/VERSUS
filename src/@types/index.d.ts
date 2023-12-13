// Login States
export type LoginState = {
  credentials: LoginCredentials;
  auth: {
    userId: number | null;
    token: string;
  };
  isConnected: boolean;
  isLoading: boolean;
  error: null | string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

// Signup States
export type SignupState = {
  credentials: SignupCredentials;
  isLoading: boolean;
  error: null | string;
  isSuccess: boolean;
};

export type SignupCredentials = {
  email: string;
  password: string;
  confirmation: string;
};

// Profile States
export type ProfileState = {
  data: UserData;
  isSuccess: boolean;
  error: null | string;
};

export type UserData = {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  avatar: string;
  games: number[];
  platforms: number[];
};
