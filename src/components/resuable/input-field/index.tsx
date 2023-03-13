import React from "react";

import { FormikProps } from "formik";

import styles from "./index.module.scss";

import LabelWrapper from "../label-wrapper";
import FieldWrapper from "../field-wrapper";
import Tooltip from "../tool-tip";
import Label from "../label";

import { parseClassName } from "./../../../utils";

interface IInputField {
  formik: FormikProps<any>;
  field: { [key: string]: any };
}

const InputField = React.forwardRef(
  (
    { formik, field: { label, name, type, validation, tooltip } }: IInputField,
    ref: any
  ) => {
    const isError: boolean = !!formik.errors[name] && !!formik.touched[name];

    return (
      <>
        <LabelWrapper>
          <Label name={name} label={label} validation={validation} />
        </LabelWrapper>

        <FieldWrapper>
          <input
            className={parseClassName([
              "w-100",
              styles.field,
              isError ? styles.error : "",
            ])}
            name={name}
            type={type}
            id={name}
            value={formik.values[name]}
            onBlur={formik.handleBlur}
            ref={ref}
            onChange={formik.handleChange}
            aria-label={label}
            aria-describeby={`${name}-error`}
            autoComplete="false"
            autoCorrect="false"
          />

          {/*{!!tooltip && <Tooltip content={tooltip} id={name} />}*/}
        </FieldWrapper>
      </>
    );
  }
);

export default InputField;
