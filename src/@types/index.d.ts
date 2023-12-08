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

export type NewEventState = {
  title: string;
  start_date: string;
  end_date: string;
  isLoading: boolean;
  error: null | string;
};

export type NewEvent = {
  title: string;
  start_date: string;
  end_date: string;
  user_id: number;
};
