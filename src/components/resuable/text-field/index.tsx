import React from "react";

import { Field } from "formik";

import styles from "./index.module.scss";

const TextField = ({ label, name, value, formik, ...props }: any) => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div
          className={`col-3 d-flex align-items-center justify-content-end mr-0 px-0`}
        >
          <div className={`${styles.label} text-right`}>{label}</div>
        </div>

        <div className="col-9 pl-2">
          <Field
            name={name}
            {...props}
            className={`${styles.field} px-2 py-1`}
            //value={formik.values?.[name] || ""}
          />
        </div>
      </div>
    </section>
  );
};

export default TextField;
