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

const ButtonField = React.forwardRef(
  (
    {
      field: { name, validation, label, options, tooltip },
      formik,
    }: IInputField,
    ref: any
  ) => {
    const currentValue = formik.values?.[name];

    const handleClick = (option: string) => {
      formik.setFieldTouched(name);

      if (currentValue === option) {
        formik.setFieldValue(name, null);
        return;
      }

      formik.setFieldValue(name, option);
    };

    typeof options === "string" &&
      (options = options.replace(/[{}]/g, "").split(","));

    return (
      <>
        <LabelWrapper>
          <Label name={name} label={label} validation={validation} />
        </LabelWrapper>

        <FieldWrapper withJustify>
          {options.map((option: string, i: number) => (
            <button
              type="button"
              key={i}
              ref={i === 0 ? ref : null}
              onClick={() => handleClick(option)}
              className={parseClassName([
                "px-3 py-1",
                styles.button,
                currentValue === option ? styles.picked : "",
                options.length > 7 ? "mb-2" : "",
                "me-2",
              ])}
            >
              {option}
            </button>
          ))}

          {!!tooltip && <Tooltip content={tooltip} id={name} />}
        </FieldWrapper>
      </>
    );
  }
);

export default ButtonField;
