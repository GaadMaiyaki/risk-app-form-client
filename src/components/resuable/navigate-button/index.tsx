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
        "d-flex align-items-center",
        "justify-content-between justify-lg-content-center justify-content-xl-center justify-content-xxl-center",
        "flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row",
        styles.wrapper,
      ])}
    >
      <button
        className="d-flex align-items-center me-4"
        data-shouldprevious={shouldPrevious}
        type={type}
        disabled={!shouldPrevious}
        aria-disabled={!shouldPrevious}
        aria-label={
          !!previousSectionName
            ? `Go to ${previousSectionName} section`
            : "Form sections begin here"
        }
        title={
          !!previousSectionName
            ? `Go to ${previousSectionName} section`
            : "Form sections begin here"
        }
        onClick={handlePrevious}
      >
        <BackwardSvg />
        {shouldPrevious && (
          <span className="mx-3">
            <em>{previousSectionName}</em>
          </span>
        )}

        <aside className="ms-2">Previous</aside>
      </button>

      <button
        type={type}
        disabled={!shouldNext}
        aria-disabled={!shouldNext}
        aria-label={
          !!nextSectionName
            ? `Go to ${nextSectionName} section`
            : "Form sections end here"
        }
        title={
          !!nextSectionName
            ? `Go to ${nextSectionName} section`
            : "Form sections end here"
        }
        onClick={handleNext}
        className="d-flex align-items-center ms-2 mt-4 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
        data-shouldnext={shouldNext}
      >
        <aside className="me-3">Next</aside>

        {shouldNext && (
          <span className="me-3">
            <em>{nextSectionName}</em>
          </span>
        )}
        <ForwardSvg />
      </button>
    </section>
  );
};

export default NavigateButton;
