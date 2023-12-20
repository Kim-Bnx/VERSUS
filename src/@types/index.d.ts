// Login States
export type LoginState = {
  credentials: LoginCredentials;
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
  email?: string;
  password?: string;
  confirmPassword?: string;
  username?: string;
  avatar?: string;
};

export type ProfileGamesState = {
  games: number[];
  isSuccess: boolean;
  error: null | string;
};

export type ProfilePlatformsState = {
  platforms: number[];
  isSuccess: boolean;
  error: null | string;
};

export type UserFavGamesState = {
  games: Game[];
  isSuccess: boolean;
  error: null | string;
};

export type Game = {
  id: number;
  name: string;
  thumbnail: string;
  createdAt: tring;
  updatedAt: null | string;
  user_like_game: {
    createdAt: null | string;
    user_id: null | number;
    game_id: null | number;
  };
};
