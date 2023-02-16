import React from "react";

import { structredFormGroup } from "../utils";

const sectionCache = new Map();

export const useFormProcessor = (
  fields: Array<any>
): [
  {
    currentSection: Array<any>;
    formSections: string[];
    section: number;
    shouldNext: boolean;
    shouldPrevious: boolean;
  },
  (type: "next" | "previous" | "default", value?: number) => void
] => {
  const [section, setSection] = React.useState(1);

  const groupedFields = React.useMemo(
    () => structredFormGroup(fields),

    [fields]
  );

  const formSections = React.useMemo(
    () => Object.keys(groupedFields || []),
    [groupedFields]
  );

  const getCurrentSection = (section: number): Array<unknown> => {
    if (!sectionCache.get(section)) {
      sectionCache.set(section, Object.values(groupedFields?.[section] || []));
    }

    return sectionCache.get(section);
  };

  const shouldNext = section <= formSections.length - 1;
  const shouldPrevious = section > 1;

  const handleSectionChange = (
    type: "next" | "previous" | "default",
    value?: number
  ) => {
    switch (type) {
      case "default": {
        value && setSection(value);
        break;
      }
      case "next": {
        shouldNext && setSection((section) => section + 1);
        break;
      }
      case "previous": {
        shouldPrevious && setSection((section) => section - 1);
        break;
      }
    }
  };

  return [
    {
      currentSection: getCurrentSection(section),
      section,
      formSections: Object.keys(groupedFields || []),
      shouldNext,
      shouldPrevious,
    },
    handleSectionChange,
  ];
};
