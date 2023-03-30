
import { parseClassName } from "../../../utils";

import styles from "./index.module.scss";

export const InitializeSpinner = () => {
  return (
    <div
      className={parseClassName([
        styles.wrapper,
        "d-flex flex-column align-items-center justify-content-center",
      ])}
    >
      <div className="d-flex align-items-center mb-2">
        <div className="spinner-grow spinner-grow-lg mb-2 text-white"></div>
      </div>
      <div className="text-white">Initializing...</div>
    </div>
  );
};

export default InitializeSpinner;
