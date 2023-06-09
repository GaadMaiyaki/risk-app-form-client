import { Outlet } from "react-router";

import Footer from "../components/footer";
import FormFooter from "../components/form-footer";
import FormHeader from "../components/form-header";
import Header from "../components/header";

const HeaderFooterLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="bg-c mx-0 mx-lg-5 mx-xl-5 mx-xxl-5">
        <section className="container">
          <FormHeader />
          <Outlet />
        </section>
      </main>
      <FormFooter />

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HeaderFooterLayout;
