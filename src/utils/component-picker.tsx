import { FormikProps } from "formik";

import ButtonField from "../components/resuable/button-field";
import InputField from "../components/resuable/input-field";
import LinearField from "../components/resuable/linear-field";
import SelectField from "../components/resuable/select-field";

type TFieldType =
  | "text"
  | "file"
  | "date"
  | "popform"
  | "buttons"
  | "select"
  | "email"
  | "number"
  | "phone"
  | "tel"
  | "time"
  | "linear";

const fieldComponentPicker = (
  type: TFieldType,
  field: { [key: string]: any },
  refs: { [key: string]: React.MutableRefObject<any> },
  formik: FormikProps<any>
): JSX.Element | undefined => {
  switch (type) {
    case "date":
    case "number":
    case "time":
    case "phone":
    case "tel":
    case "email":
    case "text": {
      return (
        <InputField formik={formik} field={field} ref={refs[field.name]} />
      );
    }
    case "buttons": {
      return (
        <ButtonField formik={formik} field={field} ref={refs[field.name]} />
      );
    }
    case "linear": {
      return (
        <LinearField formik={formik} field={field} ref={refs[field.name]} />
      );
    }
    case "select": {
      return (
        <SelectField formik={formik} field={field} ref={refs[field.name]} />
      );
    }
    default:
      console.log(type, "hre man");
    //throw new Error("invalid field type");
  }
};

export default fieldComponentPicker;
