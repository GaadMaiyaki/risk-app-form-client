import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

import LocalStorageService from "../local-storage";

const { REACT_APP_BASEURL, REACT_APP_USER }: any = process.env;

const axiosInstance = axios.create({
  baseURL: REACT_APP_BASEURL,
});

axiosInstance.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig<any>
  ): InternalAxiosRequestConfig<any> => {
    const token = LocalStorageService.get(REACT_APP_USER)?.jwt?.token;

    if (!!token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Accept-Profile"] = "api_dev";
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res: AxiosResponse<any, any>) => {
    return Promise.resolve(res);
  },
  async (error) => {
    const errConfig = error.config;

    if (!error.response) {
      return Promise.reject(error);
    }

    if (errConfig?.url !== "/login") {
      if (
        error.response.status === 401 ||
        error.response.status === 403 ||
        error.response.status === 404
      ) {
        LocalStorageService.remove(REACT_APP_USER);

        window.location.href = "/";

        return Promise.reject(error.response);
      }

      return Promise.reject(error.response);
    }

    return Promise.reject(error.response);
  }
);

export default axiosInstance;
