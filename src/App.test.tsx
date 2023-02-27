import React from "react";
import {render} from "@testing-library/react";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";

test("should render without crashing", async () => {
  act(() => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
