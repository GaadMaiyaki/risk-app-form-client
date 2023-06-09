import React from "react";

import styles from "./index.module.scss";

import { flatData, parseClassName } from "./../../../utils";
import { useWindowWidth } from "./../../../hooks/useWindowWidth";

interface ITabs {
  section: number;
  data: Array<any>;
}

const Tabs = ({ data, section }: ITabs) => {
  const ref = React.useRef<any>(null);

  const width = useWindowWidth();

  React.useEffect(() => {
    if (!ref.current) return;

    if (width < 769) {
      window.requestAnimationFrame(() => {
        ref.current.scrollIntoView({
          behavior: "instant",
          block: "center",
          inline: "start",
        });
      });
    } else {
      window.requestAnimationFrame(() => {
        ref.current.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "start",
        });
      });
    }
  }, [section, width]);

  return (
    <section
      className={parseClassName(["position-relative py-2", styles.wrapper])}
    >
      <div
        aria-live="polite"
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
              aria-selected={section === i + 1}
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
