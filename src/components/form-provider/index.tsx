import React from "react";

import { flushSync } from "react-dom";

import { Formik, Form, FormikProps } from "formik";

import * as Yup from "yup";

import { useFormProcessor } from "./../../hooks/useFormProcessor";

import FormProccessor from "../form-processor";

import { extractDataValue, validatorProcessor } from "../../utils";

import { useRefs } from "./../../hooks/useRefs";
import Button from "../resuable/button";

interface IFormProvider {
  data: Array<any>;
}

const FormProvider = ({ data }: IFormProvider) => {
  const [
    {
      currentSection,
      formSections,
      section: currentFormSection,
      shouldPrevious,
      shouldNext,
    },
    handleSectionChange,
  ] = useFormProcessor(data);

  const [s, setS] = React.useState<any>({});

  console.log(s, "this is s man");

  const criteria = ({ isValid, dirty }: any) => {
    if (!isValid) {
      return true;
    }

    return false;
  };

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
    <Formik
      initialValues={extractDataValue(data)}
      validationSchema={validatorProcessor(Yup, currentSection)}
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

              <aside className="my-5">
                <Button
                  onClick={() => handleSectionChange("previous")}
                  type="button"
                  title=""
                  color="primary"
                  size="lg"
                  label=""
                  disabled={!shouldPrevious}
                />

                <Button
                  onClick={() => handleSectionChange("next")}
                  type="button"
                  title=""
                  color="primary"
                  size="lg"
                  label=""
                  disabled={!shouldNext}
                />

                {currentFormSection === formSections.length && (
                  <button className="btn btn-dark">submit form</button>
                )}
              </aside>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default FormProvider;
