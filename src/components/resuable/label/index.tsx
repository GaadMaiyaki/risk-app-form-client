import React from "react";

const Label = ({
  name,
  label,
  validation,
}: {
  name: string;
  label: string;
  validation: boolean;
}) => {
  return (
    <label htmlFor={name}>
      {label}

      {validation && <span className="text-danger ps-1">*</span>}
    </label>
  );
};

export default Label;
