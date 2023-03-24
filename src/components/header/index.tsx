import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "./../../utils";
import GoBackSvg from "../../icons/svgs/back";

const Header = () => {
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
              " d-flex align-items-center",
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
          Client name
        </div>
      </section>
    </section>
  );
};

export default Header;

//import React from "react";

//import styles from "./index.module.scss";

//import { parseClassName } from "./../../utils";

//const Header = () => {
//  return (
//    <section
//      className={parseClassName([
//        "d-flex justify-content-between align-items-center flex-column flex-lg-row flex-xl-row flex-xxl-row",
//        "py-3 px-2 px-md-5 px-lg-5 px-xl-5 px-xxl-5",
//        styles.wrapper,
//      ])}
//    >
//      <div>
//        <img
//          src="/logo.png"
//          loading="lazy"
//          title="pillarrisk partners logo"
//          alt="A logo of backstage pillarrisk"
//          className="img-fluid"
//        />
//      </div>

//      <div
//        className={parseClassName([
//          "text-center mt-4 md-lg-0 mt-xl-0 mt-xxl-0",
//          styles.text,
//        ])}
//      >
//        <h3>Loan Origination Insurance Review Order Form</h3>

//        <p className="mt-2 px-0 px-lg-5 px-xl-5 px-xxl-5">
//          Please complete this form in its entirety and upload all necessary
//          attachments. All information left blank, and attachments not uploaded
//          at submission must be provided to Pillar Risk upon receipt
//        </p>
//      </div>
//    </section>
//  );
//};

//export default Header;
