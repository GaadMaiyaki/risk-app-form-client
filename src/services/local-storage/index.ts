class LocalStorageService {
  static get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key) as any);
    } catch (err) {
      return null;
    }
  }

  static set(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      throw new Error("Couldn't set " + key);
    }
  }

  static remove(key: string) {
    try {
      return localStorage.removeItem(key);
    } catch (err) {
      throw new Error("Couldn't remove " + key);
    }
  }
}

export default LocalStorageService;
