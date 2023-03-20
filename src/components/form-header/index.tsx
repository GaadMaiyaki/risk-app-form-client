import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "../../utils";

const FormHeader = () => {
  return (
    <section
      className={parseClassName([
        styles.wrapper,
        "row justify-content-center mb-3",
      ])}
    >
      <div
        className={parseClassName([
          "col-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 text-center",
          styles.text,
        ])}
      >
        <h4>Loan Origination Insurance Review Order Form</h4>

        <p className="mt-2 px-0 px-lg-5 px-xl-5 px-xxl-5">
          Please complete this form in its entirety and upload all necessary
          attachments. All information left blank, and attachments not uploaded
          at submission must be provided to Pillar Risk upon receipt
        </p>
      </div>
    </section>
  );
};

export default FormHeader;
