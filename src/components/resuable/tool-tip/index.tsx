import React from "react";

import { Tooltip as ReactTooltip } from "react-tooltip";

import InfoSvg from "../../../icons/svgs/info";

import styles from "./index.module.scss";

const Tooltip = React.memo(
  ({ content, id }: { content: string; id: string }) => {
    return (
      <section className={styles.wrapper}>
        <ReactTooltip
          style={{ maxWidth: "200px", textAlign: "left" }}
          id={id}
          content={content}
          place={"right"}
        />
        <span
          data-tooltip-id={id}
          className="d-flex align-self-center py-1 ps-2"
        >
          <InfoSvg />
        </span>
      </section>
    );
  }
);

export default Tooltip;
