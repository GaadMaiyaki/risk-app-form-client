import React from "react";

import FormProvider from "../../components/form-provider";

import { fields } from "../../data";

import { useGet } from "../../services/queries";

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

  //React.useEffect(() => {
  //  makeApicall()
  //    .then((data: any) => {
  //      setData(data);
  //      setIsLoading(false);
  //    })
  //    .catch((e) => setIsError(true));
  //}, []);

  if (isLoading) {
    return <div className="text-center py-5">Please wait...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-danger py-5">
        <div>{error.message}</div>
        <button className="btn btn-success mt-2" onClick={() => refetch()}>
          retry
        </button>
      </div>
    );
  }

  return <FormProvider data={data} />;
};

export default FormPage;
