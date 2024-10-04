export type TypeState = {
  types: TypeList[];
  error: null | string;
};

export type TypeList = {
  id: number;
  name: string;
};
