import React from "react";

import { useRefs } from "../../hooks/useRefs";

import { changeEventProcessor, flatData } from "../../utils";

import FormComponents from "../form-components";

import { displayController } from "./../../utils/";

import { FormikProps } from "formik";

interface IFormProcessor {
  fields: Array<any>;
  formik: FormikProps<any>;
  refs: { [key: string]: React.MutableRefObject<any> };
}

const FormProccessor = ({ fields, formik, refs }: IFormProcessor) => {
  return (
    <section className="my-5 py-5">
      <div className="bg-dark text-white p-2 mb-3 my-5 py-5">
        {flatData(fields)?.[0]?.section_name}
      </div>

      <div className="container-fluid">
        {Array.from({ length: fields.length }).map((_, i: number) => {
          return (
            <div
              className="row text-white bg-primary rounded mb-3 py-5 my-5"
              key={i}
            >
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

                if (!!field.value_deps) {
                  return displayController(field.value_deps, formik.values)
                    .value_dep ? (
                    <FormComponents
                      field={field}
                      ref={refs[field.name]}
                      formik={clonedFormik}
                      key={field.name}
                    />
                  ) : null;
                }
                if (!!field.display_deps) {
                  return displayController(field.display_deps, formik.values)
                    .display_dep ? (
                    <FormComponents
                      field={field}
                      ref={refs[field.name]}
                      formik={clonedFormik}
                      key={field.name}
                    />
                  ) : null;
                }
                return (
                  <FormComponents
                    field={field}
                    ref={refs[field.name]}
                    formik={clonedFormik}
                    key={field.name}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FormProccessor;
