import { structredFormGroup } from "..";

describe("Structured Form Group function", () => {
  const givenData = [
    {
      section: 1,
      group: 1,
    },
    {
      section: 1,
      group: 1,
    },
    {
      section: 1,
      group: 2,
    },
    {
      section: 2,
      group: 1,
    },
    {
      section: 2,
      group: 2,
    },
  ];

  const expectData = {
    1: {
      1: [
        {
          section: 1,
          group: 1,
        },
        {
          section: 1,
          group: 1,
        },
      ],
      2: [
        {
          section: 1,
          group: 2,
        },
      ],
    },
    2: {
      1: [
        {
          section: 2,
          group: 1,
        },
      ],
      2: [
        {
          section: 2,
          group: 2,
        },
      ],
    },
  };

  it("should group form fields as expected given a flat-structuted data set", () => {
    const result = structredFormGroup(givenData);

    expect(result).toBeInstanceOf(Object);

    expect(JSON.stringify(result)).toBe(JSON.stringify(expectData));
  });
});
