import React from "react";

import { FormikProps } from "formik";

import { debounce } from "../../utils";

const k = (v: any) => {
  return Promise.resolve(() => 500);
};

//const k = async (body: any) => {
//  fetch("https://backstageapi.enterpriseinsight.app:8085/v1", {
//    method: "POST",
//    body: JSON.stringify(body),
//  })
//    .then((r) => console.log(r))
//    .catch((e) => {
//      console.log(e, "this isan error man");
//    });
//};

const AutoSubmit = ({
  formik: { dirty, values },
}: {
  formik: FormikProps<{ [key: string]: any }>;
}) => {
  const d = debounce<{ [key: string]: any }>(k, 3000);

  const handleAutoSubmit = React.useCallback((arg: any) => d(arg), [d]);

  React.useEffect(() => {
    if (dirty) {
      handleAutoSubmit(values);
    }
  }, [values, dirty, handleAutoSubmit]);

  return null;
};

export default AutoSubmit;
