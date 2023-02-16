import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "./../../utils";

const Header = () => {
  return (
    <header>
      <nav
        className={`d-flex justify-content-between align-items-center flex-column flex-lg-row flex-xl-row flex-xxl-row ${styles.wrapper} py-3 px-2 px-md-5 px-lg-5 px-xl-5 px-xxl-5`}
      >
        <div>
          <img
            src="/logo.png"
            loading="lazy"
            title="pillarrisk partners logo"
            alt="Backstage pillarrisk logo"
            className="img-fluid"
          />
        </div>

        <div
          className={parseClassName([
            "text-center mt-4 md-lg-0 mt-xl-0 mt-xxl-0",
            styles.text,
          ])}
        >
          <h3>Loan Origination Insurance Review Order Form</h3>

          <div className="mt-2 px-0 px-lg-5 px-xl-5 px-xxl-5">
            Please complete this form in its entirety and upload all necessary
            attachments. All information left blank, and attachments not
            uploaded at submission must be provided to Pillar Risk upon receipt
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
