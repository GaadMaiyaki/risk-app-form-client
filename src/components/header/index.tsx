import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "./../../utils";

import { withClientName } from "./../hoc";

import GoBackSvg from "../../icons/svgs/back";

interface IHeaderProps {
  clientName?: "peter" | "Welcome";
}

const Header = ({ clientName }: IHeaderProps) => {
  return (
    <section
      className={parseClassName([styles.wrapper, "position-fixed w-100"])}
    >
      <section
        className={parseClassName([
          "d-flex justify-content-between align-items-center",
          "flex-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row",
          "py-2 px-2 px-md-5 px-lg-5 px-xl-5 px-xxl-5 mb-1",
          styles.innerWrapper,
        ])}
      >
        <div className="">
          <button
            aria-label="go back to home page"
            title="go back to home page"
            className={parseClassName([
              styles.btn,
              "d-flex align-items-center",
            ])}
          >
            <GoBackSvg />

            <span className="ms-2 d-none d-md-block d-lg-block d-xl-block d-xxl-block">
              Back to Home Page
            </span>
          </button>
        </div>

        <div className="text-center">
          <img
            src="/logo.png"
            loading="lazy"
            title="pillarrisk partners logo"
            alt="A logo of backstage pillarrisk"
            className="img-fluid"
          />
        </div>

        <div className={parseClassName(["text-end", styles.text])}>
          {clientName}
        </div>
      </section>
    </section>
  );
};

export default withClientName(Header);
