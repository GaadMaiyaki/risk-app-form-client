import React from "react";

import { ErrorMessage, FormikProps } from "formik";

import FieldWrapper from "../resuable/field-wrapper";
import LabelWrapper from "../resuable/label-wrapper";

import fieldComponentPicker from "../../utils/component-picker";

interface IFormComponents {
  field: { [key: string]: any };
  formik: FormikProps<any>;
  refs: { [key: string]: React.MutableRefObject<any> };
}

const FormComponents = ({ field, formik, refs }: IFormComponents) => {
  return (
    <div className="col-12 mb-2">
      <aside className="row align-items-center justify-content-center">
        {fieldComponentPicker(field.type, field, refs, formik)}

        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <LabelWrapper>
              <div className="d-none" />
            </LabelWrapper>
            <FieldWrapper>
              <ErrorMessage
                name={field.name}
                render={(message) => (
                  <div id={`${field.name}-error`} className={"error-message"}>
                    {message}
                  </div>
                )}
              />
            </FieldWrapper>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default FormComponents;
