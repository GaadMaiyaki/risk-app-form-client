import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "./../../../utils";

interface ILabelWrapper {
  children: React.ReactNode;
}

export const LabelWrapper = ({ children }: ILabelWrapper) => {
  return (
    <div
      className={parseClassName([
        `col-12 col-md-12 col-lg-5 col-xl-3 col-xxl-3
      text-start text-lg-end text-xl-end text-xxl-end`,
        styles.wrapper,
      ])}
    >
      {children}
    </div>
  );
};

export default LabelWrapper;
