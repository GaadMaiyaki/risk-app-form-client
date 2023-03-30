import React from "react";

import "./App.scss";

import useCustomRoutes from "./routes/index";

import Modal from "@gaadmaiyaki/simple-react-package";

import axios from "axios";
console.log(Modal, "this is a modal man.");

function App() {
  const routes = useCustomRoutes();

  return (
    <section className="app">
      {routes}

      {/*<Modal footer="peter" header="maiyak">
        helllo man
      </Modal>*/}
    </section>
  );
}

export default App;
