export type LoginState = {
  credentials: {
    email: string;
    password: string;
  };
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
