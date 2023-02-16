import React from "react";

import ReactDOM from "react-dom";

import styles from "./index.module.scss";

interface ICustomModal {
  children: React.ReactNode | React.ReactElement;
  show: boolean;
  columnLayout: string;
  title: string;
  align: string;
  includeBg?: boolean;
  setShow: (arg: boolean) => void;
}

const CustomModal = ({
  title,
  show,
  columnLayout,
  setShow,
  children,
  align,
  includeBg = true,
}: ICustomModal) => {
  const closeModal = (e: any) => {
    const isParentInTarget =
      typeof e.target.contains === "function" &&
      e.target?.contains(document.getElementById("modalWrapper"));

    if (isParentInTarget) setShow(false);

    return;
  };

  return ReactDOM.createPortal(
    <>
      {show && (
        <section
          className={`position-fixed d-flex ${align} ${styles.wrapper} ${
            includeBg && styles.includeBg
          } w-100`}
          onClick={closeModal}
          id="modalWrapper"
        >
          <div
            className={`${columnLayout} container-fluid ${styles.container} rounded px-0`}
            data-modal-body="true"
          >
            <div
              className={`d-flex align-items-center ${styles.header} px-3 py-2 rounded`}
            >
              <div
                className={`d-flex align-self-center ${styles.icon}`}
                onClick={() => setShow(false)}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6286 12L6 7.37143L1.37143 12L0 10.6286L4.62857 6L0 1.37143L1.37143 0L6 4.62857L10.6286 0L12 1.37143L7.37143 6L12 10.6286L10.6286 12Z"
                    fill="#181818"
                  />
                </svg>
              </div>
              {title && (
                <div className={`flex-fill text-center ${styles.title}`}>
                  {title}
                </div>
              )}
            </div>

            {children}
          </div>
        </section>
      )}
    </>,
    document.body
  );
};

export default CustomModal;
