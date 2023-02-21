import React from "react";

import { Field, FormikProps } from "formik";

import styles from "./index.module.scss";

interface IInputField {
  formik: FormikProps<any>;
  field: { [key: string]: any };
  //ref: React.MutableRefObject<any>;
}

const InputField = React.forwardRef(
  ({ formik, field: { label, name, type } }: IInputField, ref: any) => {
    return (
      <section className="container-fluid">
        <div className="row">
          <div
            className={`col-3 d-flex align-items-center justify-content-end mr-0 px-0`}
          >
            <div className={`${styles.label} text-right`}>{label}</div>
          </div>

          <div className="col-9 pl-2">
            <input
              className="w-100"
              name={name}
              type={type}
              value={formik.values[name]}
              onBlur={formik.handleBlur}
              ref={ref}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      </section>
    );
  }
);

export default InputField;
