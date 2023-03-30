import { parseClassName } from "../../../utils";

import styles from "./index.module.scss";

export const MultiSpinner = () => {
  return (
    <div
      className={parseClassName([
        styles.loading,
        "d-flex flex-column align-items-center justify-content-center",
      ])}
    >
      <div className="d-flex align-items-center mb-2">
        <div className="spinner-grow spinner-grow-sm mb-2 text-success"></div>
        <div className="spinner-grow spinner-grow-sm mb-2 text-success mx-2"></div>
        <div className="spinner-grow spinner-grow-sm mb-2 text-success"></div>
      </div>
      <div>Please wait...</div>
    </div>
  );
};

export default MultiSpinner;
