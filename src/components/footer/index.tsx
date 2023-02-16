import React from "react";

const Footer = () => {
  return <div>this is footer</div>;
};

export default Footer;

//import React from "react";

//import { Form, Formik } from "formik";
//import * as Yup from "yup";

//import Button from "../../reusable/button";

//import styles from "./index.module.scss";

//import AuthHeader from "../auth-header";

//import OtpInput from "react-otp-input";
//import AuthWrapper from "../../reusable/auth-wrapper";
//import AuthInnerWrapper from "../../reusable/auth-inner-wrapper";
//import { style } from "@mui/system";
//import BackRoundedSvg from "../../svgs/backRounded";
//import { useSignUp } from "../../../api/mutations";
//import { useSelector } from "react-redux";

//const initialValues = {
//  otp: "",
//};

//const validationSchema = Yup.object().shape({
//  otp: Yup.string().required("otp is required."),
//});

//const Verify = ({ setSignUpState }) => {
//  const { verification } = useSelector((state) => state.authSlice);

//  const { mutate, isLoading } = useSignUp({
//    path: "/verification/code",
//    setSignUpState,
//    message: "Code Successfully verified!",
//    nextPage: 3,
//  });

//  const onSubmit = (values) => {
//    const payload = { code: values.otp, telephone: verification?.masked_phone };
//    mutate(payload);
//  };
//  return (
//    <>
//      <AuthWrapper>
//        <AuthInnerWrapper>
//          <div
//            className={`${styles.arrow} mb-3`}
//            onClick={() => setSignUpState(1)}
//          >
//            <BackRoundedSvg />
//          </div>

//          <AuthHeader
//            {...{
//              title: "Sign Up",
//              message: "Enter OTP sent to your phone number",
//              renderStep: () => "Step 2/3",
//              small: true,
//            }}
//          />
//          <Formik {...{ onSubmit, initialValues, validationSchema }}>
//            {({ values, setFieldValue }) => (
//              <Form>
//                <OtpInput
//                  value={values.otp}
//                  onChange={(e) => setFieldValue("otp", e)}
//                  containerStyle={style.otpContainer}
//                  inputStyle={styles.otpInput}
//                  numInputs={6}
//                  separator={<span> </span>}
//                  isInputNum="true"
//                />

//                <Button
//                  {...{
//                    disabled: isLoading,
//                    text: `${isLoading ? "Verifying" : "Verify"}`,
//                    type: "submit",
//                    classes: `mt-5 ${styles.button} w-100 p-3`,
//                  }}
//                />
//              </Form>
//            )}
//          </Formik>
//        </AuthInnerWrapper>
//      </AuthWrapper>
//    </>
//  );
//};

//export default Verify;
