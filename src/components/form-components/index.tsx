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
       <div>form field</div>
        {/*<E formik={formik} field={field} />*/}

        {/*{<ErrorMessage name={field.name} />}*/}
      </div>
    );
  }
);
export default FormComponents;
