import React from "react";

import { Formik, Form, FormikProps } from "formik";

import { useFormProcessor } from "./../../hooks/useFormProcessor";
import { useRefs } from "./../../hooks/useRefs";

import Tabs from "../resuable/tabs";
import Button from "../resuable/button";
import NavigateButton from "../resuable/navigate-button";

import FormProccessor from "../form-processor";

import { extractDataValue, handleError, validatorProcessor } from "../../utils";
import FormHeader from "../form-header";
import FormFooter from "./../form-footer";

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

  const handleNext = (formik: FormikProps<any>) => () => {
    //!formik.isValid && handleError(formik.errors, refs);

    //formik.isValid&&
    handleSectionChange("next");

    //formik.setSubmitting(false);
  };

  const handlePrevious = (formik: FormikProps<any>) => () => {
    //formik.isValid&&
    handleSectionChange("previous");

    //!formik.isValid && handleError(formik.errors, refs);

    //formik.setSubmitting(false);
  };

  return (
    <>
      <Tabs data={groupedFields} section={section} />
      <Formik
        initialValues={extractDataValue(data)}
        //validationSchema={validatorProcessor(currentSection)}
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

              <aside className="mt-5 text-center">
                <NavigateButton
                  handleNext={handleNext(formik)}
                  handlePrevious={handlePrevious(formik)}
                  type="submit"
                  shouldNext={shouldNext}
                  shouldPrevious={shouldPrevious}
                  previousSectionName={getPreviousSectionName()}
                  nextSectionName={getNextSectionName()}
                />
              </aside>

              <aside className="text-center">
                {/*{section === formSections.length && (
                  <Button
                    type="submit"
                    title="Submit Form"
                    color="secondary"
                    size="lg"
                    label="Submit Form"
                    classes="w-100 mb-3 py-2"
                  />
                )}*/}
              </aside>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormProvider;
