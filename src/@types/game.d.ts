export type GameState = {
  games: GameList[];
  error: null | string;
};

export type GameList = {
  id: number;
  name: string;
  thumbnail: string;
};
