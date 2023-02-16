import React from "react";

import { Field } from "formik";

import styles from "./index.module.scss";

const SelectField = ({ label, name, options }: any) => {
  typeof options === "string" &&
    (options = options.replace(/[{}]/g, "").split(","));

  return (
    <>
      <section className="container-fluid">
        <div className="row">
          <div
            className={`col-3 d-flex align-items-center justify-content-end mr-0 pr-0`}
          >
            <div className={styles.label}>{label}</div>
          </div>

          <div className="col-9 pl-2">
            <Field as="select" name={name} className={`${styles.field}`}>
              <option></option>
              {options?.length > 0 &&
                options.map((option: any) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </Field>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectField;
