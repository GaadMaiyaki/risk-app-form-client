import React from "react";

import { useRoutes } from "react-router-dom";

import Protected from "../components/auth/protected";

import LocalStorageService from "../services/local-storage";

import HeaderFooterLayout from "./../layouts";

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
          element: <HomePage />,
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
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default useCustomRoutes;
