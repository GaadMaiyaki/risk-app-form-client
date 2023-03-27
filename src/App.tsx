import React from "react";

import "./App.scss";

import useCustomRoutes from "./routes/index";

import axios from "axios";

function App() {
  const routes = useCustomRoutes();

  return <section className="app">{routes}</section>;
}

export default App;
