import React from "react";

import { parseClassName } from "./../index";

describe("parseClassName Function", () => {
  it("should return the correct style string", () => {
    const styles = { wrapper: "mx-2 my-3" };

    const result = parseClassName(["peter", styles.wrapper]);

    expect(result).toBe("peter mx-2 my-3");
  });
});


