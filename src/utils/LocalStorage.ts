// eslint-disable-next-line import/prefer-default-export
export class LocalStorage {
  static getItem(key: string) {
    const value = localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
  }

  static setItem(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
