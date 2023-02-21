import React from "react";

import styles from "./index.module.scss";

import { flatData, parseClassName } from "./../../../utils";

interface ITabs {
  children: React.ReactNode;
  section: number;
  data: Array<any>;
}

const Tabs = ({ children, data, section }: ITabs) => {
  return (
    <section className="position-relative">
      {/*<div className={`position-relative d-flex  ${styles.wrapper} w-100`}>
        <div
          className={parseClassName([styles.p, "align-items-center "])}
          style={{ width: `${section * 10}%` }}
        ></div>
        {Object.entries(data).map(([key, value], i): any => {
          console.log(i, "this is i man");
          return (
            <div
              key={i}
              className={parseClassName([
                "text-white py-1 px-2 rounded text-center",
                i === 0 ? "" : "mx-2",
                +key === section ? `bg-primary` : "bg-dark",
              ])}
              style={{ marginRight: i === 0 ? "8px" : "" }}
            >
              {flatData(Object.values(value || []))?.[0]?.section_name}
            </div>
          );
        })}
        <div
          className={parseClassName([styles.show])}
          style={{ width: `${6 * 10}vw` }}
        ></div>
      </div>*/}

      {children}

      {/*<button>here man</button>*/}
    </section>
  );
};

export default Tabs;
