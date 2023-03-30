import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "./../../utils";

const FormFooter = () => {
  return (
    <section className={parseClassName([styles.wrapper, "text-center"])}>
      Forms submissions are secured using TLS 1.2 SSL and are stored in a
      database that is encrypted at rest
    </section>
  );
};

export default FormFooter;
