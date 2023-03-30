import React from "react";

import FormProvider from "../../components/form-provider";

import { withProtection } from "../../components/hoc";

import { fields } from "../../data";

import { useGet } from "../../services/queries";

import { parseClassName } from "../../utils";

import styles from "./index.module.scss";

const makeApicall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(fields), 500);
  });
};

const FormPage = () => {
  //const [data, setData] = React.useState([]);

  //const [isLoading, setIsLoading] = React.useState(true);

  //const [isError,setIsError]=React.useState(false);

  const { isLoading, isError, data, error, refetch }: any =
    useGet("/client/order/form");

  console.log(data, "this is the data man");

  //React.useEffect(() => {
  //  makeApicall()
  //    .then((data: any) => {
  //      setData(data);
  //      setIsLoading(false);
  //    })
  //    .catch((e) => setIsError(true));
  //}, []);

  if (isLoading) {
    return (
      <div
        className={parseClassName([
          styles.loading,
          "d-flex flex-column align-items-center justify-content-center",
        ])}
      >
        <div className="d-flex align-items-center mb-2">
          <div className="spinner-grow spinner-grow-sm mb-2 text-success"></div>
          <div className="spinner-grow spinner-grow-sm mb-2 text-success mx-2"></div>
          <div className="spinner-grow spinner-grow-sm mb-2 text-success"></div>
        </div>
        <div>Please wait...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={parseClassName([
          styles.error,
          "d-flex flex-column align-items-center justify-content-center text-danger",
        ])}
      >
        <div>{error.message}</div>
        <button
          className="btn btn-success mt-2"
          title="try again"
          onClick={() => refetch()}
        >
          Try again
        </button>
      </div>
    );
  }

  return <FormProvider data={data.form_fields} />;
};

export default withProtection(FormPage);
