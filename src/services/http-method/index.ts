import axiosInstance from "../axios";

class HTTP {
  static async post(path: string, data: any) {
    try {
      return await axiosInstance.post(path, data);
    } catch (err: any) {
      throw new Error(err.response ? err.response : err);
    }
  }
  static async get(path: string) {
    try {
      return await axiosInstance.get(path);
    } catch (err: any) {
      throw new Error(err.response ? err.response : err);
    }
  }

  static async delete() {}
}

export default HTTP;
