import React from "react";

import { Field, FormikProps } from "formik";

import styles from "./index.module.scss";
import LabelWrapper from "../label-wrapper";
import FieldWrapper from "../field-wrapper";
import Label from "../label";
import Tooltip from "../tool-tip";
import { parseClassName } from "../../../utils";

interface ISelectField {
  formik: FormikProps<any>;
  field: { [key: string]: any };
}

const SelectField = React.forwardRef(
  (
    {
      formik,
      field: { label, name, validation, tooltip, options },
    }: ISelectField,
    ref: any
  ) => {
    typeof options === "string" &&
      (options = options.replace(/[{}]/g, "").split(","));

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      formik.setFieldTouched(name);
      formik.setFieldValue(name, e.target.value);
    };

    const isError: boolean = !!formik.errors[name] && !!formik.touched[name];

    return (
      <>
        <LabelWrapper>
          <Label name={name} label={label} validation={validation} />
        </LabelWrapper>

        <FieldWrapper>
          <select
            name={name}
            className={parseClassName([
              "w-100",
              styles.field,
              isError ? styles.error : "",
            ])}
            ref={ref}
            onChange={handleChange}
          >
            <option value=""></option>
            {options.length > 0 &&
              options.map((option: any) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>

          {!!tooltip && <Tooltip content={tooltip} id={name} />}
        </FieldWrapper>
      </>
    );
  }
);

export default SelectField;
