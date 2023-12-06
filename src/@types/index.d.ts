import { DateValue } from '@mantine/dates';

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

export type Event = {
  title: string;
  schedule: {
    startDate: string;
    endDate: string;
  };
  banner?: string;
  location?: string;
  status?: string;
  description?: string;
  rules?: string;
  contacts?: string;
  result?: string;
};
