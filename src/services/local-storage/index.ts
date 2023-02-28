class LocalStorageService {
  constructor() {}

  static get(key: string) {
    try {
      return window.localStorage.getItem(key);
    } catch (err) {
      throw new Error("Couldn't get " + key);
    }
  }

  static set(key: string, value: any) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      throw new Error("Couldn't save " + key);
    }
  }

  static remove(key: string) {
    try {
      return window.localStorage.removeItem(key);
    } catch (err) {
      throw new Error("Couldn't remove " + key);
    }
  }
}

export default LocalStorageService;
