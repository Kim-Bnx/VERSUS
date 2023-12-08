export type LoginState = {
  isConnected: boolean;
  credentials: {
    email: string;
    password: string;
  };
  error: null | string;
  isLoading: boolean;
};

export type LoginCredentials = {
  email: string;
  password: string;
};
