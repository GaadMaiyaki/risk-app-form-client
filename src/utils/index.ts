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

export const structuredValidationSchema = (data: Array<any>) => {};

export const structuredInitialValues = (data: Array<any>) => {};

export const structredFormGroup = (fields: Array<{ [key: string]: any }>) => {
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
  return fields.reduce((acc, { name, value }) => {
    acc[name] = value;

    return acc;
  }, {});

  // return flatData(data).reduce((acc, { name, value }) => {
  //   acc[name] = value;

  //   return acc;
  // }, {});
};

export const displayController = (
  deps: Array<any>,
  values: { [key: string]: any }
) => {
  const valueDependecy =
    !!deps &&
    !!deps.length &&
    deps.every(({ name, value }: { [key: string]: any }) => {
      return values[name] === value;
    });

  const displayDependency =
    !!deps &&
    !!deps.length &&
    deps.some((name: string) => {
      return !values[name];
    });

  return {
    value_dep: valueDependecy,
    display_dep: displayDependency,
  };
};

export const validatorProcessor = (Yup: any, fields: Array<any>) => {
  return Yup.object().shape({
    ...(flatData(fields) || []).reduce((acc, { validation, name }) => {
      if (!!validation) {
        acc[name] = Yup.string().required(`This field is required.`);
      }

      return acc;
    }, {}),
  });
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
          return;
        }
      };
    }

    default:
      throw new Error("Unknown formatting type");
  }
};
