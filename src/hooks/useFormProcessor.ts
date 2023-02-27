import React from "react";

import { flatData, structredFormGroup } from "../utils";

const sectionCache = new Map();

export const useFormProcessor = (
  fields: Array<any>
): [
  {
    groupedFields: Array<any>;
    currentSection: Array<any>;
    formSections: string[];
    section: number;
    shouldNext: boolean;
    shouldPrevious: boolean;
    getPreviousSectionName(): string;
    getNextSectionName(): string;
  },
  (type: "next" | "previous" | "default", value?: number) => void
] => {
  const [section, setSection] = React.useState(1);

  const groupedFields: { [key: string]: Record<string, any[]> }[] =
    React.useMemo(
      () => structredFormGroup(fields),

      []
    );

  const formSections: Array<any> = React.useMemo(
    () => Object.keys(groupedFields || []),
    []
  );

  const getCurrentSection = (section: number): Array<unknown> => {
    if (!sectionCache.get(section)) {
      sectionCache.set(section, Object.values(groupedFields?.[section] || []));
    }

    return sectionCache.get(section);
  };

  const shouldNext: boolean = section <= formSections.length - 1;
  const shouldPrevious: boolean = section > 1;

  const getPreviousSectionName = (): string => {
    return flatData(
      Object.values(groupedFields[section > 2 ? section - 1 : 1] || [])
    )?.[0]?.section_name;
  };

  const getNextSectionName = (): string => {
    return flatData(Object.values(groupedFields[section + 1] || []))?.[0]
      ?.section_name;
  };

  const handleSectionChange = (
    type: "next" | "previous" | "default",
    value?: number
  ): void => {
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
      default:
        throw new Error(void 0);
    }
  };

  return [
    {
      currentSection: getCurrentSection(section),
      section,
      formSections: Object.keys(groupedFields || []),
      shouldNext,
      shouldPrevious,
      groupedFields,
      getNextSectionName,
      getPreviousSectionName,
    },
    handleSectionChange,
  ];
};
