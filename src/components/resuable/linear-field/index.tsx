import React from "react";

import { ErrorMessage, FormikProps } from "formik";

import styles from "./index.module.scss";

import LabelWrapper from "../label-wrapper";
import Tooltip from "../tool-tip";
import Label from "../label";

import { changeEventProcessor, parseClassName } from "../../../utils";

interface ILinearField {
  formik: FormikProps<any>;
  field: { [key: string]: any };
}

const LinearField = React.forwardRef(
  (
    {
      formik,
      field: { label, name, validation, tooltip, children: childrenFields },
    }: ILinearField,
    ref: any
  ) => {
    return (
      <>
        <LabelWrapper>
          <Label name={name} label={label} validation={validation} />
        </LabelWrapper>

        <div
          className={parseClassName([
            "col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 pl-2",
            styles.wrapper,
          ])}
        >
          <aside
            className={parseClassName([
              "d-flex flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row align-items-start",
            ])}
          >
            {childrenFields.map(({ name, formatting }: any, index: number) => {
              const isError: boolean =
                !!formik.errors[name] && !!formik.touched[name];

              const handleChange = !!formatting
                ? changeEventProcessor({
                    formatting: formatting,
                    formik,
                  })
                : formik.handleChange;

              return (
                <aside
                  key={name}
                  className={parseClassName([
                    "w-100",
                    index === 1
                      ? "mx-0 mx-md-3 mx-lg-3 mx-xl-3 mx-xl-3 mx-xxl-3 my-1 my-md-0 my-lg-0 my-xl-0 my-xl-0 my-xxl-0"
                      : "",
                  ])}
                >
                  <input
                    className={parseClassName([
                      "w-100",
                      styles.field,
                      isError ? styles.error : "",
                    ])}
                    name={name}
                    type={"text"}
                    id={name}
                    value={formik.values[name]}
                    onBlur={formik.handleBlur}
                    ref={!formik.values[name] ? ref : null}
                    onChange={handleChange}
                    aria-label={label}
                    aria-describedby={`${name}-error`}
                    autoComplete="false"
                    autoCorrect="false"
                  />

                  <ErrorMessage
                    component="div"
                    name={name}
                    render={(message) => (
                      <div id={`${name}-error`} className={"error-message"}>
                        {message}
                      </div>
                    )}
                  />
                </aside>
              );
            })}
            <aside className="mt-1">
              {!!tooltip && <Tooltip content={tooltip} id={name} />}
            </aside>
          </aside>
        </div>
      </>
    );
  }
);

export default LinearField;
