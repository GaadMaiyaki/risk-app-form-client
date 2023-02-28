import { useQuery } from "react-query";

import HTTP from "../http-method";

export const useGet = (path: string) => {
  return useQuery([path], () => HTTP.get(path));
};
