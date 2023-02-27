import React from "react";

import * as Yup from "yup";

import { parsePhoneNumberFromString } from "libphonenumber-js";

export const parseClassName = (classes: Array<string>): string => {
  return classes.filter(Boolean).join(" ");
};

export const debounce = <T>(
  fn: (arg: T) => void | Promise<T>,
  delay: number
): ((arg: T) => void) => {
  let timeoutID: NodeJS.Timeout;

  return (arg: T) => {
    if (timeoutID) clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      fn.call(this, arg);
    }, delay);
  };
};

export const structredFormGroup = (
  fields: Array<{ [key: string]: any }>
): { [key: string]: Record<string, any[]> }[] => {
  return (fields || []).reduce((acc: any, current) => {
    const { section, group } = current;

    if (!acc[section]) {
      acc[section] = {};
    }

    if (!acc[section][group]) {
      acc[section][group] = [];
    }

    acc[section][group].push(current);

    return acc;
  }, {});
};

export const recurseStructure = <T>(
  fields: Record<number, Array<T>> | Array<T>,
  cb: (arg: T) => void
) => {
  Object.values(fields || []).forEach((v: T[]) => {
    if (Array.isArray(v)) recurseStructure(v, cb);
    else cb(v);
  });
};

export const flatData = (data: Array<any>) => {
  return (data || []).flat(1);
};

export const extractDataValue = (fields: Array<any>) => {
  if (fields?.length <= 0) return null;

  let obj: any = {};

  for (const field of fields) {
    if (!!field?.children) {
      obj = { ...obj, ...extractDataValue(field.children) };
    } else {
      const { name, value } = field;
      obj[name] = value || "";
    }
  }

  return obj;
};

export const displayControllerSection = (
  deps: Array<any>,
  values: Array<any>
) => {
  return (deps || []).every(({ name, value }: { [key: string]: any }) => {
    return values[name] === value;
  });
};

export const displayController = (
  deps: Array<any>,
  values: { [key: string]: any }
) => {
  const valueDependecy =
    !!deps &&
    !!deps.length &&
    (deps || []).every(({ name, value }: { [key: string]: any }) => {
      return values[name] === value;
    });

  const displayDependency =
    !!deps &&
    !!deps.length &&
    (deps || []).some((name: string) => {
      return !values[name];
    });

  return {
    value_dep: valueDependecy,
    display_dep: displayDependency,
  };
};

const getYupSchema = ({ type, message, regex, label }: any) => {
  console.log(type, message, regex, label, "parameters man");
  switch (type) {
    case "text": {
      return Yup.string()
        .nullable()
        .required(message || `${label} is required.`);
    }
    case "number": {
      return Yup.number()
        .nullable()
        .required(message || `${label} is required.`);
    }
    case "email": {
      return Yup.string()
        .nullable()
        .email("Provide a valid email")
        .required(message || `${label} is required.`);
    }
    case "tel": {
      return Yup.string()
        .nullable()
        .matches(
          new RegExp(/^\+1 \(\d{3}\) \d{3}-\d{4}$/),
          "Invalid phone number format"
        )
        .required(message || `${label} is required.`);
    }
    default:
      throw new Error("Invalid type");
  }
};

export const validatorProcessor = (fields: Array<any>) => {
  fields = flatData(fields);

  if (fields?.length <= 0) return null;

  let obj: any = {};

  for (const field of fields) {
    if (!!field?.children && !!field.validation) {
      for (const {
        name,
        label,
        validation: { type, message, regex },
      } of field.children) {
        obj[name] = getYupSchema({
          type,
          message,
          regex,
          label,
        });
      }
    } else {
      if (!!field.validation) {
        const {
          name,
          label,
          validation: { type, message, regex },
        } = field;

        obj[name] = getYupSchema({
          type,
          message,
          regex,
          label,
        });
      }
    }
  }
  return Yup.object().shape(obj);
};

export const formatCurrency = (value: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    maximumSignificantDigits: 10,
    currency,
  }).format(+value);
};

export const changeEventProcessor = ({
  formatting,
  formik,
}: {
  formik: any;
  formatting: { [key: string]: any };
}) => {
  switch (formatting.type) {
    case "currency": {
      return (e: React.ChangeEvent<any>): void => {
        const { name, value } = e.target;

        const relativeValue = value.includes(".")
          ? value.replace(/[$,€]/g, "").split(".")
          : value.replace(/[$,€]/g, "");

        if (typeof relativeValue === "object") {
          if (isNaN(+relativeValue[0]) || isNaN(+relativeValue[1])) return;
          formik.setFieldValue(
            name,
            formatCurrency(+relativeValue[0], formatting.format) +
              `.${relativeValue[1]}`
          );
        }

        if (typeof relativeValue === "string" && !!relativeValue) {
          if (isNaN(+relativeValue)) return;
          formik.setFieldValue(
            name,
            formatCurrency(+relativeValue, formatting.format)
          );
        }

        if (!relativeValue) {
          formik.setFieldValue(name, "");
        }
      };
    }
    case "phone": {
      return (e: React.ChangeEvent<any>): void => {
        const { name, value } = e.target;
        formik.setFieldValue(name, value);
      };

      //  try {
      //    const parsedNumber = parsePhoneNumberFromString("+1" + value, "US");
      //    formik.setFieldValue(name, parsedNumber?.formatNational());
      //  } catch (e) {
      //    // Handle invalid phone number input
      //    console.log("error occcured");
      //    //formik.setFieldValue(name, "+1" + value);
      //  }
      //};
    }

    default:
      throw new Error("Unknown formatting type");
  }
};

export const handleError = (
  errors: any,
  refs: { [key: string]: React.MutableRefObject<any> }
) => {
  const errorNamesArr = Object.keys(errors || {});

  errorNamesArr?.length > 0 &&
    errorNamesArr.forEach((name) => {
      refs[name].current?.scrollIntoView({
        block: "center",
        inline: "center",
      });
      refs[name].current?.focus();
    });
};
