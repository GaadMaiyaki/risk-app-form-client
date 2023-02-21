import React from "react";

import { flushSync } from "react-dom";

import { Formik, Form, FormikProps } from "formik";

import * as Yup from "yup";

import { useFormProcessor } from "./../../hooks/useFormProcessor";

import FormProccessor from "../form-processor";

import { extractDataValue, validatorProcessor } from "../../utils";

import { useRefs } from "./../../hooks/useRefs";
import Button from "../resuable/button";
import { flatData } from "./../../utils/index";
import Tabs from "../resuable/tabs";

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

  const handleErr = (errors: any) => {
    const errorsArr = Object.keys(errors || {});

    errorsArr?.length > 0 &&
      errorsArr.forEach((e) => {
        refs[e].current?.scrollIntoView({
          block: "center",
          inline: "nearest",
        });
        refs[e].current?.focus();
      });
  };

  return (
    <Tabs data={groupedFields} section={section}>
      <Formik
        initialValues={extractDataValue(data)}
        validationSchema={validatorProcessor(Yup, currentSection)}
        validateOnMount
        onSubmit={(v, f: any) => {
          console.log(v, "this is value", f, "this is error");
        }}
      >
        {(formik: FormikProps<any>) => {
          return (
            <>
              {console.log(formik.isValid, formik, formik.isSubmitting)}
              <Form>
                <FormProccessor
                  fields={currentSection}
                  formik={formik}
                  refs={refs}
                />

                <aside className="my-5 text-center">
                  <Button
                    onClick={() => {
                      formik.isValid && handleSectionChange("previous");

                      !formik.isValid && handleErr(formik.errors);
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
                      !formik.isValid && handleErr(formik.errors);

                      formik.isValid && handleSectionChange("next");
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
            </>
          );
        }}
      </Formik>
    </Tabs>
  );
};

export default FormProvider;
