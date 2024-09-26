import { UserData } from './types';

export type NewEventState = {
  title: string;
  title_slug: string;
  start_date: string;
  end_date: string;
  isLoading: boolean;
  error: string | null;
  success: string | null;
};

export type NewEvent = {
  title: string;
  start_date: string;
  end_date: string;
  user_id: number;
};

export type Event = {
  id: number;
  title: string;
  title_slug: string;
  start_date: string;
  end_date: string;
  banner?: string;
  thumbnail?: string;
  location?: string;
  status?: string;
  description?: string;
  rules?: string;
  contact?: string;
  type_id?: number;
  event_type?: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  game_id?: number;
  game?: {
    id: number;
    name: string;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
  };
  platform_id?: number;
  platform?: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  user_id?: number;
  organizer: UserData;
  participants: UserData[];
};

export type EventState = {
  event: Event;
  isLoading: boolean;
  modified: boolean;
  error: string | null;
};

export type RegistrationState = {
  isRegistered: boolean;
  error: string | null;
};

export type UserRegistration = {
  event_id: number;
  user_id: number;
};

export type EventsState = {
  events: Event[];
  isLoading: boolean;
  modified: boolean;
  error: string | null;
};

export type UserEventsState = {
  events: Event[];
  organize: [];
  error: null | string;
  isLoading: boolean;
};
