import React from "react";

import { Formik, Form } from "formik";

interface IFormProvider {
  children: React.ReactNode;
  data?: Array<any>;
  initialValues: { [key: string]: any };
  validationSchema: { [key: string]: any };
}

const FormWrapper = ({
  children,
  validationSchema,
  initialValues,
}: IFormProvider) => {


  
  return (
    <Formik
      initialValues={{}}
      validationSchema={{}}
      onSubmit={() => console.log("hello from Provider")}
    >
      {() => {
        return <Form>{children}</Form>;
      }}
    </Formik>
  );
};


export default FormWrapper;