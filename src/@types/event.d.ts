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

export type EventState = {
  id: number;
  title: string;
  title_slug: string;
  start_date: string;
  end_date: string;
  banner: string;
  thumbnail: string;
  localhost: string;
  status: string;
  description: string;
  rules: string;
  contact: string;
  type_event: number;
  game_id: number;
  user_id: number;
  isLoading: boolean;
  error: string | null;
};
