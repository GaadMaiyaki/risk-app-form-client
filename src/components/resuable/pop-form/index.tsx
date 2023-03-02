import React from "react";

import styles from "./index.module.scss";

import CustomModal from "../modal";

import { FormikState } from "formik";



const extractChildrenValue = (
  children: Array<any>,
  formik: FormikState<any>,
  display_value: string[]
): string[] => {
  //if (!!display_value) return display_value;

  if (!!display_value) return display_value;

  return [];

  //return (children ?? [])
  //  .map((item, index) => {
  //    const currentItem = formik.values?.[item.name];

  //    const constraint = index !== children?.length - 1;

  //    const dash = constraint ? "   |   " : "";

  //    return currentItem ? `${currentItem}  ${dash}` : "";
  //  })
  //  .join("");
};

const renderDisplayValue = (arr: string[]) => {
  if (arr?.length <= 0) return null;

  if (arr.length === 1) return arr?.[0];

  if (arr?.length > 1) {
    return arr?.map((v, i) => (
      <span className={`${styles.displayValue} ${i > 0 && "ml-1"}`}>{v}</span>
    ));
  }

  return null;
};

const TrackerContactField = ({
  label,
  children,
  formik,
  display_value,
}: any) => {
  const [show, setShow] = React.useState(false);

  const displayValue = extractChildrenValue(children, formik, display_value);

  return (
    <>
      <CustomModal
        {...{
          title: label,
          show,
          setShow,
          columnLayout: "col-12 col-md-7 col-lg-8 col-xl-4",
          align: "align-items-center",
        }}
      >
        {/*<TrackerFormWrapper>*/}
          <section className={`${styles.formWrapper}`}>
            {/*<FormRenderer
              {...{
                data: children,
                formik,
              }}
            />*/}
            <aside className="mt-5 text-center">
              <button
                className={`${styles.buttonStyle} ${styles.buttonBorder} mr-2 py-2`}
                onClick={() => setShow(false)}
                type="button"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() => setShow(false)}
                className={`${styles.buttonStyle} ${styles.buttonGreen} py-2`}
              >
                Done
              </button>
            </aside>
          </section>
        {/*</TrackerFormWrapper>*/}
      </CustomModal>

      <section className="container-fluid">
        <div className="row">
          <div
            className={`col-3 d-flex align-items-center justify-content-end mr-0 px-0`}
          >
            <div className={`${styles.label} text-right`}>{label}</div>
          </div>

          <div className="col-9 pl-2 d-flex align-self-center">
            <button
              className={`${styles.formButton} ${
                !!display_value ? `py-1` : styles.boxHeight
              } text-left`}
              type="button"
              aria-label="open contact forms"
              onClick={() => setShow(true)}
            >
              {renderDisplayValue(displayValue)}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(TrackerContactField);
