import React from "react";

import { recurseStructure } from "../utils";

type Tr = Record<number, Array<{ [key: string]: any }>>;

export const useRefs = (fields: Array<{ [key: string]: any }>) => {
  const refs: {
    [key: string]: React.MutableRefObject<any>;
  } = {};

  recurseStructure<Tr>(fields, ({ name }: { [key: string]: any }) => {
    refs[name] = React.createRef();
  });

  return refs;
};
