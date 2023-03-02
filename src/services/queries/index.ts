import { useQuery } from "react-query";

import HTTPService from "../http";

export const useGet = (path: string) => {
  return useQuery([path], () => HTTPService.get(path));
};
