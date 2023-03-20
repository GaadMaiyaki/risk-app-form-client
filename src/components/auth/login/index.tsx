import { Formik, Form, FormikValues } from "formik";
import * as Yup from "yup";

import styles from "./index.module.scss";

import OtpInput from "../../resuable/otp-input";
import Button from "../../resuable/button";

import ClientSvg from "../../../icons/svgs/client";

import { parseClassName } from "../../../utils";

import { useNavigate } from "react-router-dom";

import { usePost } from "../../../services/mutations";

import LocalStorageService from "../../../services/local-storage";

const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .required("Client ID is required")
    .length(6, "Client ID must be six characters"),
});

const Auth = () => {
  const { mutate, isLoading } = usePost("/login");

  const handleSubmit = (values: FormikValues) => {
    const payload = { email: values.otp };

    mutate(payload, {
      onSuccess: (data) => {
        LocalStorageService.set(`${process.env.REACT_APP_USER}`, data.data);
        navigate("../form", { replace: true });
      },
      onError: (err: any) => {
        alert("Oops! An error occured. " + err?.message);
      },
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form
              className={parseClassName([styles.wrapper, "text-center py-2"])}
            >
              <div className="mb-3">
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
                  label: isLoading ? "Connecting..." : "Continue",
                  onClick: () => console.log("h"),
                  color: "secondary",
                  size: "md",
                  type: "submit",
                  title: "Continue form submission",
                  classes: "py-3 px-5 mt-5",
                  disabled: isLoading,
                }}
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Auth;
