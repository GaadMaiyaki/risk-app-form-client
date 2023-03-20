import axiosInstance from "../axios";

class HTTPService {
  static post = async (path: string, data: { [key: string]: any }) => {
    try {
      return await axiosInstance.post(path, data);
    } catch (err: any) {
      throw new Error(err.data ? err.data?.message : err);
    }
  };
  static get = async (path: string) => {
    try {
      const res = await axiosInstance.get(path);
      return res.data;
    } catch (err: any) {
      throw new Error(err.data ? err.data?.message : err);
    }
  };
}

export default HTTPService;
