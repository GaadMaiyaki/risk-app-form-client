import React from "react";

import { useRoutes } from "react-router-dom";

import Protected from "../components/auth/protected";
import ProtectedOnce from "../components/auth/protected-once";
import HeaderFooterLayout from "./../layouts";

import LocalStorageService from "../services/local-storage";

const HomePage = React.lazy(() => import("../pages"));
const FormPage = React.lazy(() => import("./../pages/form"));

const NotFound = () => <div>Not found.</div>;

const useCustomRoutes = () => {
  return useRoutes([
    {
      element: <HeaderFooterLayout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedOnce
              isAuthenticated={
                !!LocalStorageService.get(`${process.env.REACT_APP_USER}`)
              }
            >
              <HomePage />
            </ProtectedOnce>
          ),
        },
        {
          path: "form",
          element: (
            <Protected
              isAuthenticated={
                !!LocalStorageService.get(`${process.env.REACT_APP_USER}`)
              }
            >
              <FormPage />
            </Protected>
          ),
        },
      ],
    },
    {
      element: <HeaderFooterLayout />,
      children: [
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
};

export default useCustomRoutes;
