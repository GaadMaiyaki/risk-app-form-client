import React from "react";

import { Formik, Form, FormikValues } from "formik";
import * as Yup from "yup";

import styles from "./index.module.scss";

import OtpInput from "../resuable/otp-input";
import Button from "../resuable/button";

import ClientSvg from "../../icons/svgs/client";

import { parseClassName } from "./../../utils";

import {useNavigate} from "react-router-dom";

import { usePost } from "./../../services/mutations";

const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .required("Client ID is required")
    .length(6, "Client ID must be six characters"),
});

const Auth = () => {
  const { mutate, isLoading, isError, error } = usePost("/login");

  const handleSubmit = (values: FormikValues) => {
    console.log("submitting this", values);
    mutate(values, {
      onSuccess: () => {
        alert("success");
        navigate("/form");
      },
      onError: () => {
        alert("an error occured.");
      },
    });
  };

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ otp: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <>
            <Form className="text-center py-5">
              <div className={parseClassName(["mb-3", styles.title])}>
                <ClientSvg />

                <span className="mx-2">
                  Enter your Unique 6 digit Code (CLIENT ID)
                </span>
              </div>

              <OtpInput
                {...{
                  name: "otp",
                  value: formik.values.otp,
                  setFieldValue: formik.setFieldValue,
                  numInputs: 6,
                }}
              />

              <Button
                {...{
                  label: "Continue",
                  onClick: () => console.log("h"),
                  color: "secondary",
                  size: "md",
                  type: "submit",
                  title: "Continue form submission",
                  classes: "py-3 px-5 mt-5",
                  disabled: false,
                }}
              />
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default Auth;
