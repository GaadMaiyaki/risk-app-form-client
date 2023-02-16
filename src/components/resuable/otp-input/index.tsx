import React from "react";

import OTP from "react-otp-input";

import styles from "./index.module.scss";

import { ErrorMessage } from "formik";

interface IOtpInput {
  value: string | undefined;
  name: string;
  setFieldValue(field: string, value: any): void;
  numInputs: number;
}

const OtpInput = ({ value, setFieldValue, numInputs, name }: IOtpInput) => {
  return (
    <div>
      <OTP
        value={value}
        onChange={(value: string) => setFieldValue(name, value)}
        containerStyle={styles.otpContainer}
        inputStyle={styles.otpInput}
        numInputs={numInputs}
        separator={<span> </span>}
        isInputNum={true}
      />

      <ErrorMessage component="div" className={styles.error} name={name} />
    </div>
  );
};

export default OtpInput;
