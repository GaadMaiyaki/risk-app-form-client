import React from "react";

import FormProvider from "../../components/form-provider";

import { withProtection } from "../../components/hoc";

import { useGet } from "../../services/queries";

import { MultiSpinner } from "./../../components/spinners/multi";

import Error from "../../components/errors";

const FormPage = () => {
  const { isLoading, isError, data, error, refetch }: any =
    useGet("/client/order/form");

  if (isLoading) {
    return <MultiSpinner />;
  }

  if (isError) {
    return <Error error={error} refetch={refetch} />;
  }

  return <FormProvider data={data.form_fields} />;
};

export default withProtection(FormPage);
