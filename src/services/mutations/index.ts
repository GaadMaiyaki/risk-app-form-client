import { useMutation } from "react-query";

import HTTPService from "../http";

export const usePost = (key: string) => {
  return useMutation((payload: { [key: string]: any }) =>
    HTTPService.post(key, payload)
  );
};
