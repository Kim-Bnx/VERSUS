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

export type SearchState = {
  isLoading: boolean;
  error: null | string;
  searchTerm: string;
  searchResults: [
    {
      id: null | number;
      title: string;
      title_slug: null | string;
      start_date: string;
      end_date: string;
      banner: null | string;
      thumbnail: null | string;
      location: string;
      status: string;
      description: string;
      rules: null | string;
      contact: string;
      createdAt: string;
      updatedAt: null | string;
      type_event_id: null | number;
      game_id: null | number;
      user_id: null | number;
      game: {
        id: null | number;
        name: string;
        thumbnail: string;
        createdAt: string;
        updatedAt: null | string;
      };
      organizer: {
        id: null | number;
        username: string;
        email: string;
        password: string;
        avatar: null | string;
        createdAt: string;
        updatedAt: null | string;
        role_id: null | number;
      };
      type_event: {
        id: null | number;
        name: string;
        createdAt: string;
        updatedAt: null | string;
      };
    }
  ];
};
