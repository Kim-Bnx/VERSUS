import { Event } from './event';

export type UserState = {
  data: UserData & { games: UserGames[] } & { platforms: UserPlatforms[] };
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
    events: Event[];
    organize: Event[];
    games: UserGames[];
    platforms: UserPlatforms[];
    createdAt: string;
  };
  error: null | string;
};

export type UserGames = {
  id: number;
  name: string;
};

export type UserPlatforms = {
  id: number;
  name: string;
};

export type PasswordChangeState = {
  data: NewPasswords;
  error: null | string;
};

export type NewPassword = {
  id: number;
  password: string;
  confirmPassword: string;
};
