import React from "react";

import BackwardSvg from "../../../icons/svgs/backward";
import ForwardSvg from "../../../icons/svgs/forward";

import { parseClassName } from "./../../../utils/";

import styles from "./index.module.scss";

interface INaviagteButton {
  type: "reset" | "submit" | "button";
  color?: string;
  nextSectionName: string;
  previousSectionName: string | undefined;
  shouldNext: boolean;
  shouldPrevious: boolean;
  handleNext: (arg: any) => void;
  handlePrevious: (arg: any) => void;
}

const NavigateButton = ({
  type,
  nextSectionName,
  previousSectionName,
  shouldNext,
  shouldPrevious,
  handleNext,
  handlePrevious,
}: INaviagteButton) => {
  return (
    <section
      className={parseClassName([
        "d-flex align-items-center justify-content-center",
        styles.wrapper,
      ])}
    >
      <button
        className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row align-items-center me-4"
        data-shouldPrevious={shouldPrevious}
        type={type}
        disabled={!shouldPrevious}
        arial-label={
          !!previousSectionName
            ? `Go to ${previousSectionName}`
            : "Section begins here"
        }
        title={
          !!previousSectionName
            ? `Go to ${previousSectionName}`
            : "Section begins here"
        }
        onClick={handlePrevious}
      >
        <BackwardSvg />
        {shouldPrevious && (
          <span className="mx-3">
            {/*<em>*/}[{previousSectionName}]{/*</em>*/}
          </span>
        )}

        <aside className="ms-2">Previous</aside>
      </button>

      <button
        type={type}
        disabled={!shouldNext}
        arial-label={
          !!nextSectionName ? `Go to ${nextSectionName}` : "Section ends here"
        }
        title={
          !!nextSectionName ? `Go to ${nextSectionName}` : "Section ends here"
        }
        onClick={handleNext}
        className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row align-items-center ms-2"
        data-shouldNext={shouldNext}
      >
        <aside className="me-3">Next</aside>

        {shouldNext && (
          <span className="me-3">
            {/*<em>*/}[{nextSectionName}]{/*</em>*/}
          </span>
        )}
        <ForwardSvg />
      </button>
    </section>
  );
};

export default NavigateButton;