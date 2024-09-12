export type SearchState = {
  isLoading: boolean;
  error: null | string;
  searchTerm: string;
  searchResults: {
    events: Event[];
    users: User[];
    teams: Team[];
  };
};

type Event = {
  id: number | null;
  title: string;
  title_slug: string;
  start_date: string;
  end_date: string;
  banner: null;
  thumbnail: null;
  location: null;
  status: string;
  description: null;
  rules: null;
  contact: null;
  createdAt: string;
  updatedAt: string;
  type_event_id: null;
  game_id: null;
  user_id: null;
};

type User = {
  id: null | number;
  username: string;
  email: string;
  password: string;
  avatar: null;
  createdAt: string;
  updatedAt: null | string;
  role_id: null | number;
};

type Team = {
  id: null | number;
  name: string;
  createdAt: string;
  updatedAt: null | string;
};
