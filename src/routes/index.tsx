import React from "react";

import { useRoutes } from "react-router-dom";

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
          element: <FormPage />,
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
