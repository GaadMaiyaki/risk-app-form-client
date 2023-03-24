import React from "react";

import "./App.scss";

import useCustomRoutes from "./routes/index";

//import MyModal from "@gaadmaiyaki/simple-react-package";

function App() {
  const routes = useCustomRoutes();

  return (
    <section className="app">
      {routes}

      {/*<MyModal>hello world</MyModal>*/}
    </section>
  );
}

export default App;
