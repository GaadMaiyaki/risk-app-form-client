import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "./../../utils/";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <section className={parseClassName([styles.wrapper, "text-center"])}>
      <div className="py-4">
        <aside>Pillar Risk Partners LLC</aside>
        <aside> @{year} by Pillar Risk</aside>
      </div>

      <aside className="pb-2">Privacy Policy</aside>
    </section>
  );
};

export default Footer;
