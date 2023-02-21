import React from "react";

import { ErrorMessage, FormikProps } from "formik";
import InputField from "../resuable/input-field";

interface IFormComponents {
  field: { [key: string]: any };
  formik: FormikProps<any>;
}

//const E = ({ formik, field }: { formik: any; field: any }) => {
//  return <div>{formik.errors[field.name]}</div>;
//};

type TFieldType = "text" | "file" | "date" | "popform";

const fieldComponentPicker = (
  type: TFieldType,
  field: { [key: string]: any },
  ref: React.MutableRefObject<any>,
  formik: FormikProps<any>
): JSX.Element | undefined => {
  switch (type) {
    case "text": {
      return <InputField formik={formik} field={field} ref={ref} />;
    }
    default:
      throw new Error("invalid field type");
  }
};

const FormComponents = React.forwardRef(
  ({ field, formik }: IFormComponents, ref: any) => {
    return (
      <div className="col-12 my-5">
        {fieldComponentPicker(field.type, field, ref, formik)}

        {<ErrorMessage name={field.name} />}
      </div>
    );
  }
);
export default FormComponents;
