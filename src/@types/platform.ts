export type PlatformState = {
  platforms: PlatformList[];
  error: null | string;
};

export type PlatformList = {
  id: number;
  name: string;
};
