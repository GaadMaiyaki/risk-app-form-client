import React from "react";

import styles from "./index.module.scss";

interface IFormWrapper {
  children: React.ReactNode;
  withMargin?: boolean;
  paddingBottom?: string;
  withOpacity?: boolean;
}

const FormWrapper = ({
  children,
  withMargin,
  paddingBottom,
  withOpacity,
}: IFormWrapper) => {
  return (
    <section
      className={`position-relative py-1 ${styles.wrapper} ${
        withOpacity && styles.opacity
      } 
        ${paddingBottom ? paddingBottom : "pb-2"}  ${
        withMargin ? "mt-2" : "mt-0"
      } px-1 px-lg-4 px-xl-4 px-md-0 px-sm-0`}
    >
      {withOpacity && (
        <div className={`position-absolute w-100 ${styles.fade}`}></div>
      )}

      {children}
    </section>
  );
};

export default FormWrapper;
