import React from "react";

import styles from "./index.module.scss";

//interface ISelectProps {
//  label: string;
//  name: string;
//  type: string;
//  options: any;
//  relay?: boolean;
//  formik: any;
//}

const ButtonField = ({ label, name, type, options, formik }: any) => {
  const currentValue = formik.values?.[name];

  const handleClick = (option: string) => {
    let saveValue = option;

    if (currentValue === option) {
      formik.setFieldValue(name, null);
      return;
    }

    formik.setFieldValue(name, saveValue);
  };

  typeof options === "string" &&
    (options = options.replace(/[{}]/g, "").split(","));

  return (
    <>
      <section className="container-fluid">
        <div className="row mt-1">
          <div
            className={`col-3 d-flex align-items-center justify-content-end mr-0 pr-0`}
          >
            <div className={styles.label}>{label}</div>
          </div>

          <div className="col-9 pl-2">
            {options.map((option: string, i: number) => (
              <button
                type="button"
                key={i}
                onClick={() => handleClick(option)}
                className={`px-3 py-1 ${styles.button} ${
                  currentValue === option ? styles.picked : ""
                }
                ${options?.length > 4 && "mb-2"}
                ${i > 0 ? "ml-2" : ""}
                `}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ButtonField;
