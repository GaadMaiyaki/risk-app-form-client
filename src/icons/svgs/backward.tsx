import React from "react";

const BackwardSvg = ({ color = "rgba(0, 0, 0, 1)" }: { color?: string }) => {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 11L1 6L6 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackwardSvg;
