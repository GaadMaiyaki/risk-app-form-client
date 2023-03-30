import React from "react";

import { parseClassName } from "../../utils";

import styles from "./index.module.scss";

interface IErrorProps {
  error: Error;
  refetch(): void;
}

const Error = ({ error, refetch }: IErrorProps) => {
  return (
    <div
      className={parseClassName([
        styles.error,
        "d-flex flex-column align-items-center justify-content-center text-danger",
      ])}
    >
      <div>{error.message}</div>
      <button
        className="btn btn-success mt-2"
        title="try again"
        onClick={() => refetch()}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
