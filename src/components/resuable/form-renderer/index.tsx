import React from "react";

import PopformField from "../pop-form";
import ButtonField from "../button-field";
import SelectField from "../select-field";
import TextField from "../input-field";
import TextAreaField from "../textarea-field";

const pickField = (fieldType: string, item: { [key: string]: any }) => {
  switch (fieldType) {
    case "text":
    case "date":
    case "time":
    case "phone":
    case "tel":
    case "email": {
      return null;
    }
    case "select": {
      return <SelectField {...item} />;
    }
    case "buttons": {
      return <ButtonField {...item} />;
    }
    case "waiver": {
      return <TextAreaField {...item} />;
    }
    case "popform": {
      return <PopformField {...item} />;
    }
    default:
      throw new Error("Invalid form type supplied.");
  }
};

const FormRenderer = ({ data, formik }: { data: Array<any>; formik: any }) => {
  return (
    <>
      {data.length > 0 && (
        <div className="row">
          {data.map((item: any) => {
            return (
              <div className="col-12 mt-1" key={item.name}>
                {pickField(item.type, { ...item, formik })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default FormRenderer;
