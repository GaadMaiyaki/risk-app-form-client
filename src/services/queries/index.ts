import { useQuery } from "react-query";

import HTTPService from "../http/index";

export const useGet = (path: string) => {
  return useQuery([path], () => HTTPService.get(path));
};
