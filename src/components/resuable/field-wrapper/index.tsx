import React from "react";

import { parseClassName } from "./../../../utils";

interface IFieldWrapper {
  children: React.ReactNode;
  withYMargin?: boolean;
  withJustify?: boolean;
}

export const FieldWrapper = ({
  children,
  withYMargin,
  withJustify,
}: IFieldWrapper) => {
  return (
    <div
      className={parseClassName([
        "col-12 col-md-9 col-lg-6 col-xl-6 col-xxl-6 pl-2",
      ])}
    >
      <aside
        className={parseClassName([
          "d-flex align-items-center",
          withJustify ? "flex-wrap" : "justify-content-between",
          withYMargin ? "my-1" : "",
        ])}
      >
        {children}
      </aside>
    </div>
  );
};

export default FieldWrapper;
