import { UserData } from './user';

export type NewEventState = {
  title: string;
  title_slug: string;
  start_date: string;
  end_date: string;
  isLoading: boolean;
  error: string | null;
};

export type NewEvent = {
  title: string;
  start_date: string;
  end_date: string;
  user_id: number;
};

// the ? are temporary
export type Event = {
  id: number;
  title: string;
  title_slug?: string;
  start_date?: string | Date;
  end_date?: string | Date;
  banner?: string;
  thumbnail?: string;
  location?: string;
  status?: string;
  description?: string;
  rules?: string;
  contact?: string;
  type_event?: string;
  type_event_id?: number;
  game?: string;
  game_id?: number;
  plateform?: string;
  plateform_id?: number;
  user_id?: number;
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
