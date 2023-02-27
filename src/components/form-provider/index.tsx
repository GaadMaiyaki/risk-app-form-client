import React from "react";

import { Formik, Form, FormikProps } from "formik";

import * as Yup from "yup";

import { useFormProcessor } from "./../../hooks/useFormProcessor";
import { useRefs } from "./../../hooks/useRefs";

import Tabs from "../resuable/tabs";
import Button from "../resuable/button";

import FormProccessor from "../form-processor";

import { extractDataValue, handleError, validatorProcessor } from "../../utils";

interface IFormProvider {
  data: Array<any>;
}

const FormProvider = ({ data }: IFormProvider) => {
  const [
    {
      groupedFields,
      currentSection,
      formSections,
      section,
      shouldPrevious,
      shouldNext,
      getNextSectionName,
      getPreviousSectionName,
    },
    handleSectionChange,
  ] = useFormProcessor(data);

  const refs: {
    [key: string]: React.MutableRefObject<any>;
  } = useRefs(data);

  console.log(currentSection, "this is current section man");

  return (
    <Tabs data={groupedFields} section={section}>
      <Formik
        initialValues={extractDataValue(data)}
        validationSchema={validatorProcessor(currentSection)}
        validateOnMount
        onSubmit={(v, f: any) => {
          console.log(v, "this is value", f, "this is error");
        }}
      >
        {(formik: FormikProps<any>) => {
          return (
            <Form>
              <FormProccessor
                fields={currentSection}
                formik={formik}
                refs={refs}
              />
              {console.log(formik, "formik") as any}

              <aside className="my-5 text-center">
                <Button
                  onClick={() => {
                    formik.isValid && handleSectionChange("previous");

                    !formik.isValid && handleError(formik.errors, refs);

                    formik.setSubmitting(false);
                  }}
                  type="submit"
                  title=""
                  color="primary"
                  size="lg"
                  label="Previous"
                  disabled={!shouldPrevious}
                  classes="bg-none"
                  renderComponent={() => (
                    <span>{shouldPrevious && getPreviousSectionName()}</span>
                  )}
                />

                <Button
                  onClick={() => {
                    !formik.isValid && handleError(formik.errors, refs);

                    formik.isValid && handleSectionChange("next");

                    formik.setSubmitting(false);
                  }}
                  type="submit"
                  title=""
                  color="primary"
                  size="lg"
                  label="Next"
                  disabled={!shouldNext}
                  classes="mx-2 bg-none"
                  renderComponent={() => (
                    <span>{shouldNext && getNextSectionName()}</span>
                  )}
                />
              </aside>

              <aside className="text-center">
                {section === formSections.length && (
                  <Button
                    type="submit"
                    title="Submit Form"
                    color="primary"
                    size="lg"
                    label="Next"
                    classes="w-100 mb-3"
                  />
                )}
              </aside>
            </Form>
          );
        }}
      </Formik>
    </Tabs>
  );
};

export default FormProvider;
