import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "../../../utils";

interface IButton {
  title: string;
  label: string;
  onClick: () => void;
  classes?: string;
  type: "button" | "submit" | "reset" | undefined;
  color: "primary" | "secondary";
  size: "md" | "sm" | "lg";
  disabled?: boolean;
}

const Button = ({ label, classes, color, size, ...props }: IButton) => {
  return (
    <button
      {...props}
      aria-label={label}
      className={parseClassName([
        styles.btn,
        styles[color],
        styles[size],
        classes ? classes: "",
      ])}
    >
      {label}
    </button>
  );
};


export default Button;