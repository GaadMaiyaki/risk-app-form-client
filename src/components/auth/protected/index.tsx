import React from "react";

import { useNavigate } from "react-router-dom";

const Protected = ({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: JSX.Element;
}) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/");
    return null;
  }

  return children;
};

export default Protected;
