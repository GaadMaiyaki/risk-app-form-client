import React from "react";

import { Field } from "formik";

//import Select from "react-select";

import "./index.scss";

interface IMultiSelectProps {
  label?: string;
  name?: string;
  type?: string;
  options?: any;
  relay?: boolean;
  formik?: any;
  placeholder?: string;
}

const CustomSelect = ({ field, form, options, isMulti }: any) => {
  //const onChange = (option: any) => {
  //  form.setFieldValue(
  //    field?.name,
  //    option?.map((item: any) => item?.value)
  //  );
  //};
  //const getValue = () => {
  //  if (options) {
  //    const values =
  //      typeof field?.value === "string"
  //        ? field?.value
  //            .replace(/"/g, "")
  //            .replace("[", "")
  //            .replace("]", "")
  //            .split(", ")
  //        : field?.value;
  //    return options?.filter((option: any) => {
  //      return values?.indexOf(option?.value) >= 0;
  //    });
  //  }
  //};
  //return (
  //  <Select
  //    className={`react-select-container p-0 m-0 field`}
  //    name={field?.name}
  //    value={getValue()}
  //    onChange={onChange}
  //    options={options}
  //    isMulti={isMulti}
  //    placeholder=""
  //    classNamePrefix="react-select"
  //  />
  //);
};

export default function MultiSelectFieldTracker({
  label,
  name,
  options,
}: IMultiSelectProps) {
  //options =
  //  typeof options === "string"
  //    ? options.replace(/[{}]/g, "").split(",")
  //    : options;
  //options = options.map((option: string) => ({
  //  label: option,
  //  value: option,
  //}));
  //return (
  //  <section className="container-fluid" style={{ marginTop: "1px" }}>
  //    <div className="row">
  //      <div
  //        className={`col-3 d-flex align-items-center justify-content-end mr-0 px-0`}
  //      >
  //        <div className={`label text-right`}>{label}</div>
  //      </div>
  //      <div className="col-9 pl-2">
  //        <Field
  //          name={name}
  //          options={options}
  //          component={CustomSelect}
  //          isMulti={true}
  //        />
  //      </div>
  //    </div>
  //  </section>
  //);
}
