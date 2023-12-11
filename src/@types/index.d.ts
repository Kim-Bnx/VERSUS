// Login States
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

// Signup States
export type SignupState = {
  userValues: SignupValues;
  isLoading: boolean;
};

export type SignupValues = {
  email: string;
  password: string;
  confirmPassword: string;
  pseudo: string;
  avatar: string;
  games: {
    id: number | null;
    name: string;
  };
  platforms: {
    id: number | null;
    name: string;
  };
};
