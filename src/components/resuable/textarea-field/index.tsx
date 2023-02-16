import React from "react";

import { Field } from "formik";

import styles from "./index.module.scss";

//import CommentSvg from "./../../svgs/Comment";

import CustomModal from "../modal";

const TextAreaField = ({
  label,
  name,
  commentName,
  type,
  placeholder,
  occupy,
  formik,
  ...rest
}: any) => {
  const [show, setShow] = React.useState(false);

  const waiverValue = formik.values?.[commentName];

  return (
    <>
      <CustomModal
        {...{
          title: "Add Exception Comment",
          show,
          setShow,
          columnLayout: "col-12 col-md-8 col-lg-7 col-xl-4",
          align: "align-items-start pt-5",
        }}
      >
        <div className={`${styles.textareaWrapper} text-center py-3 px-3`}>
          <textarea
            onChange={(e) => formik.setFieldValue(commentName, e.target.value)}
            value={formik.values?.[commentName]}
            rows={9}
            name={commentName}
            placeholder="Enter Comment"
            className={`${styles.textarea}`}
          ></textarea>

          <div className="mt-3">
            <button
              type="button"
              className={`${styles.buttonBorder} mr-2 py-2`}
              onClick={() => setShow(false)}
            >
              Cancel
            </button>

            <button
              type="button"
              className={`${styles.button} py-2`}
              onClick={() => setShow(false)}
            >
              Save
            </button>
          </div>
        </div>
      </CustomModal>
      <section className="container-fluid">
        <div className="row">
          <div
            className={`col-3 d-flex align-items-center justify-content-end mr-0 pr-0`}
          >
            <div className={`${styles.label}`}>{label}</div>
          </div>

          <div className="col-9 pl-2">
            <div className="d-flex align-items-center w-100">
              <div className="flex-fill">
                <Field
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  className={`${styles.field} px-2 py-1`}
                  {...rest}
                />
              </div>
              <div
                className={` ${styles.commentIcon} px-2 ml-2`}
                onClick={() => setShow(true)}
              >
                {/*<CommentSvg
                  color={waiverValue ? "rgba(213, 156, 0, 1)" : "#181818"}
                />*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextAreaField;
