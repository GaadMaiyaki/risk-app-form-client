import React from "react";

import { ErrorMessage, FormikProps } from "formik";

interface IFormComponents {
  field: { [key: string]: any };
  formik: FormikProps<any>;
}

const E = ({ formik, field }: { formik: any; field: any }) => {
  return <div>{formik.errors[field.name]}</div>;
};

const FormComponents = React.forwardRef(
  ({ field, formik }: IFormComponents, ref: any) => {
    console.log(field.section, field.name, "this is handle change");

    return (
      <div className="col-12 my-5">
        <input
          className="w-100"
          name={field.name}
          type={field.type}
          value={formik.values[field.name]}
          onBlur={formik.handleBlur}
          ref={ref}
          onChange={formik.handleChange}
        />

        <E formik={formik} field={field} />

        {/*{formik.touched[field.name] && <div>{formik.errors?.[field.name]|| " pdd"}</div>}*/}
      </div>
    );
  }
);
export default FormComponents;
