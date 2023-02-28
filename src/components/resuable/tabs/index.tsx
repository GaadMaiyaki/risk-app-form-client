import React from "react";

import styles from "./index.module.scss";

import { flatData, parseClassName } from "./../../../utils";

interface ITabs {
  section: number;
  data: Array<any>;
}

const Tabs = ({ data, section }: ITabs) => {
  const ref = React.useRef<any>(null);

  React.useEffect(() => {
    section > 1 &&
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
  }, [section]);

  return (
    <section
      className={parseClassName([
        "position-relative mt-3 py-2",
        styles.wrapper,
      ])}
    >
      <div
        arial-live="polite"
        role="tablist"
        className={parseClassName([
          "position-relative d-flex w-100",
          styles.innerWrapper,
        ])}
      >
        {Object.entries(data).map(([key, value], i): any => {
          return (
            <div
              role="tab"
              arial-selected={(section === i + 1)?.toString()}
              key={i}
              ref={section === i + 1 ? ref : null}
              className={parseClassName([
                "py-1 px-3 rounded text-center",
                i === 0 ? "" : "mx-2",
                +key === section ? styles.bold : styles.light,
              ])}
              style={{ marginRight: i === 0 ? "8px" : "" }}
            >
              {flatData(Object.values(value || []))?.[0]?.section_name}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tabs;
