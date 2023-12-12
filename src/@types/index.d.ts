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
  accountInfos: NewUserData;
  isLoading: boolean;
  error: null | string;
  isSuccess: boolean;
};

export type SignupCredentials = {
  email: string;
  password: string;
  confirmation: string;
};

export type NewUserData = {
  username: string;
  avatar: string;
  games: number[];
  platforms: number[];
};
