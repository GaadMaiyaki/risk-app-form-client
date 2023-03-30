import { displayController } from "..";

describe("Display Controller", () => {
  it("should return false when the condition doesn't satisfy the deps...", () => {
    const values = {
      shola: "",
      peter: "",
    };

    const deps = [{ name: "shola", value: "maiyaki" }];

    const result = displayController(deps, values);

    expect(result.value_dep).toBe(false);
  });

  it("should return True when the condition doesn't satisfy the deps...", () => {
    const values = {
      shola: "maiyaki",
      peter: "",
    };

    const deps = [{ name: "shola", value: "maiyaki" }];

    const result = displayController(deps, values);

    expect(result.value_dep).toBe(true);
  });

  it("should return True when the condition doesn't satisfy the deps... (dispsl", () => {
    const values = {
      shola: "maiyaki",
      peter: "",
    };

    const deps = ["shola"];

    const result = displayController(deps, values);

    expect(result.display_dep).toBe(false);
  });

  it("should return True when the condition doesn't satisfy the deps... (dispsl", () => {
    const values = {
      shola: "maiyaki",
      peter: "",
    };

    const deps = ["peter"];

    const result = displayController(deps, values);

    expect(result.display_dep).toBe(true);
  });
});
