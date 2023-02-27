import React from "react";
import FormProvider from "../../components/form-provider";

import { fields } from "../../data";

const makeApicall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(fields), 500);
  });
};

const FormPage = () => {
  const [data, setData] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    makeApicall()
      .then((data: any) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((e) => setIsError(true));
  }, []);

  if (isLoading) {
    return <div>Please wait...</div>;
  }

  if (isError) {
    return (
      <div>
        An error occured...
        <button onClick={() => console.log("retrying")}>retry</button>
      </div>
    );
  }

  return (
    <section>
      <FormProvider data={data} />
    </section>
  );
};

export default FormPage;
