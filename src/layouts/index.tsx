import React from "react";

import { Outlet } from "react-router";

//import Footer from "../components/footer";
import Header from "../components/header";

const HeaderFooterLayout = () => {
  return (
    <section className="container">
      <Header />

      <main>
        <Outlet />
      </main>

      {/*<Footer />*/}
    </section>
  );
};

export default HeaderFooterLayout;