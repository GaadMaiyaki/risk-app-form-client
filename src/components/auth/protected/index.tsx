import React from "react";

import { Navigate, useNavigate } from "react-router-dom";

const Protected = ({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: JSX.Element;
}) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Protected;
