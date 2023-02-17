import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "../../../utils";

interface IButton {
  title: string;
  label: string;
  onClick?: () => void;
  classes?: string;
  type: "button" | "submit" | "reset" | undefined;
  color: "primary" | "secondary";
  size: "md" | "sm" | "lg";
  disabled?: boolean;
  renderComponent?(): React.ReactNode;
}

const Button = ({
  label,
  classes,
  color,
  size,
  renderComponent,
  ...props
}: IButton) => {
  return (
    <button
      {...props}
      aria-label={label}
      className={parseClassName([
        classes ? classes : "",
        styles.btn,
        styles[color],
        styles[size],
      ])}
    >
      {label}
      {renderComponent && renderComponent()}
    </button>
  );
};

export default Button;
