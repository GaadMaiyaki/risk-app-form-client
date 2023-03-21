import React from "react";

import {
  changeEventProcessor,
  displayController,
  parseClassName,
} from "../../utils";

import FormComponents from "../form-components";

import { FormikProps } from "formik";

import styles from "./index.module.scss";

interface IFormProcessor {
  fields: Array<any>;
  formik: FormikProps<any>;
  refs: { [key: string]: React.MutableRefObject<any> };
}

const FormProcessor = ({ fields, formik, refs }: IFormProcessor) => {
  console.log(fields, "here man many");

  return (
    <section
      className={parseClassName(["container-fluid pt-4 pb-2", styles.wrapper])}
    >
      {Array.from({ length: fields.length }).map((_, i: number) => {
        console.log(fields[i], i, "here man");

        return (
          <div className="row mb-4" key={i}>
            {(fields[i] || []).map((field: { [key: string]: any }) => {
              const clonedFormik = {
                ...formik,
                handleChange: !!field.formatting
                  ? changeEventProcessor({
                      formatting: field.formatting,
                      formik,
                    })
                  : formik.handleChange,
              };

              if (
                !!field.value_deps &&
                !displayController(field.value_deps, formik.values).value_dep
              ) {
                return null;
              }
              if (
                !!field.display_deps &&
                displayController(field.display_deps, formik.values).display_dep
              ) {
                return null;
              }

              return (
                <FormComponents
                  field={field}
                  refs={refs}
                  formik={clonedFormik}
                  key={field.name}
                />
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default FormProcessor;
