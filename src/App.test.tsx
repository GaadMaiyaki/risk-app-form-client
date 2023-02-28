import React from "react";

import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

test("should render without crashing", async () => {
  act(() => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
