import { useNavigate } from "react-router-dom";

import { Formik, Form, FormikValues } from "formik";
import * as Yup from "yup";

import styles from "./index.module.scss";

import OtpInput from "../../resuable/otp-input";
import Button from "../../resuable/button";

import ClientSvg from "../../../icons/svgs/client";

import { parseClassName } from "../../../utils";

import { usePost } from "../../../services/mutations";

import LocalStorageService from "../../../services/local-storage";

import axios from "axios";

import React from "react";

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

  const uploadHandler = async (filename: string, type: string, file: any) => {
    try {
      const response = await axios({
        url: `https://api.enterpriseinsight.co:8085/v1/deets/s3/upload?filename=${encodeURIComponent(
          filename
        )}`,
        data: file,
        method: "POST",
        headers: {
          "Content-Type": type,
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZkMzlkOTk3LWE1YmMtNGY4Ny04YmYzLTlhMDQ3MWY3NWFiOSIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZGVldHNfcHJvZmlsZV9vd25lciIsImVtYWlsIjoibmR1a3dlLmthbEBnbWFpbC5jb20iLCJleHAiOjE2Nzk1OTAzNjF9.TKbtMEnFh0E29R2zrUKZQYbJgkFbFwA1kpKodU_sNBA",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const [image, setImage] = React.useState<any>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      setImage(URL.createObjectURL(file));

      formData.append("file", file, file.name);

      const id = `profile_3cd2c75f-5e17-4985-b93e-407fbe4a15b0_${file.name}`;

      //uploadHandler(id, file.name, formData);

      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZkMzlkOTk3LWE1YmMtNGY4Ny04YmYzLTlhMDQ3MWY3NWFiOSIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZGVldHNfcHJvZmlsZV9vd25lciIsImVtYWlsIjoid29rb21hZGF2aWQxQGdtYWlsLmNvbSIsImV4cCI6MTY3OTYwNjM2OX0.Eqnem513Eistmm3S5A9po59eFTVGJkbqYYQdZ3BAkTo"
      );
      myHeaders.append("Content-Type", file.type);

      const requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: file,
        redirect: "follow",
      };

      fetch(
        "https://api.enterpriseinsight.co:8085/v1/deets/s3/upload?filename=" +
          file.name,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      //const logoID = `profile_3cd2c75f-5e17-4985-b93e-407fbe4a15b0_${file.name}`;
      //await axios({
      //  url: `https://api.enterpriseinsight.co:8085/v1/document/upload?filename=${encodeURIComponent(
      //    id
      //  )}`,
      //  data: formData,
      //  method: "POST",
      //  headers: {
      //    "Content-Type": "application/octet-stream",
      //    Authorization:
      //      "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZkMzlkOTk3LWE1YmMtNGY4Ny04YmYzLTlhMDQ3MWY3NWFiOSIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZGVldHNfcHJvZmlsZV9vd25lciIsImVtYWlsIjoibmR1a3dlLmthbEBnbWFpbC5jb20iLCJleHAiOjE2Nzk1OTAzNjF9.TKbtMEnFh0E29R2zrUKZQYbJgkFbFwA1kpKodU_sNBA",
      //  },
      //});

      //axios.post(
      //  "https://api.enterpriseinsight.co:8085/v1/deets/s3/upload?filename=" +
      //    id,
      //  { data: formData },
      //  {
      //    headers: {
      //      Authorization:
      //        "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZkMzlkOTk3LWE1YmMtNGY4Ny04YmYzLTlhMDQ3MWY3NWFiOSIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZGVldHNfcHJvZmlsZV9vd25lciIsImVtYWlsIjoibmR1a3dlLmthbEBnbWFpbC5jb20iLCJleHAiOjE2Nzk1OTAzNjF9.TKbtMEnFh0E29R2zrUKZQYbJgkFbFwA1kpKodU_sNBA",
      //    },
      //  }
      //);

      const final_payload = {
        page: "profile_image",
        profile_image_name: id,
      };

      //const final_payload = {
      //  page: "logo_image",
      //  profile_image_name: id,
      //};

      //axios.post(
      //  "https://api.enterpriseinsight.co:8085/v1/deets/admin/profile",
      //  { data: final_payload },
      //  {
      //    headers: {
      //      prefer: "params=single-object",
      //      Authorization:
      //        "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZkMzlkOTk3LWE1YmMtNGY4Ny04YmYzLTlhMDQ3MWY3NWFiOSIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZGVldHNfcHJvZmlsZV9vd25lciIsImVtYWlsIjoibmR1a3dlLmthbEBnbWFpbC5jb20iLCJleHAiOjE2Nzk1OTAzNjF9.TKbtMEnFh0E29R2zrUKZQYbJgkFbFwA1kpKodU_sNBA",
      //    },
      //  }
      //);
    }
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
            <Form className={parseClassName([styles.wrapper, "text-center"])}>
              <div className="mb-3">
                <ClientSvg />
                {/*
                {image && (
                  <img src={image} alt="hello" height="300px" width="300px" />
                )}*/}

                {/*<div className="p-5 my-5">{counter}</div>*/}

                {/*{data.map((data: any) => {
                return (
                  <div
                    key={data.id}
                    className="bg-white text-dark p-5"
                    onClick={() => {
                      handleRemove(data.id);
                      postData();
                    }}
                  >
                    <div>{data.title}</div>
                    <div>{data.body}</div>
                  </div>
                );
              })}*/}

                {/*<div>
                  <input type="file" name="file" onChange={handleFileUpload} />
                </div>*/}

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
