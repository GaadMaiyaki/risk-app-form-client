import { useMutation } from "react-query";

import HTTP from "../http-method";

export const usePost = (key: string) => {
  return useMutation((payload: { [key: string]: any }) =>
    HTTP.post(key, payload)
  );
};
