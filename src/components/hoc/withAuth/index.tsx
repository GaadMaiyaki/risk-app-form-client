import React from "react";

import LocalStorageService from "../../../services/local-storage";
import { useNavigate } from "react-router-dom";

const withAuth = (Component: any) => {
  return (props: any): React.ReactNode => {
    const navigate = useNavigate();

    const token = LocalStorageService.get(`${process.env.RISK_APP_USER}`);

    if (!token) navigate("/login");
    else return <Component {...props} />;
  };
};

export default withAuth;
