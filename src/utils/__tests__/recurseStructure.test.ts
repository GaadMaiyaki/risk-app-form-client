import React from "react";

import { recurseStructure } from "./../index";

type TRe = { [key: string]: any };

describe("recurseStructure Function", () => {
  it("should execute the callback wrt to updating an outer context value, i.e having provided a pre-grouped data", () => {
    const field_s: TRe = {
      1: [
        { name: "peter", value: "maiyaki" },
        { name: "peter2", value: "maiyaki2" },
      ],
      2: [
        { name: "peter3", value: "maiyaki3" },
        { name: "peter4", value: "maiyaki4" },
      ],
    };

    const mutatedObject: { [key: string]: any } = {};

    const expectedObject = {
      peter: "maiyaki",
      peter2: "maiyaki2",
      peter3: "maiyaki3",
      peter4: "maiyaki4",
    };

    recurseStructure<TRe>(field_s, ({ name, value }: TRe) => {
      mutatedObject[name] = value;
    });

    expect(JSON.stringify(mutatedObject)).toBe(JSON.stringify(expectedObject));
  });
});
