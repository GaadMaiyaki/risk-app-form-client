import React from "react";

import ReactPaginate from "react-paginate";

import BackwardSvg from "../../../icons/svgs/backward";
import ForwardSvg from "../../../icons/svgs/forward";

import styles from "./index.module.scss";

const Pagination = (props: { [key: string]: any }) => {
  return (
    <ReactPaginate
      pageCount={props.count}
    
      previousLabel={<BackwardSvg color={"rgba(0,0,0,1)"} />}
      nextLabel={<ForwardSvg color={"rgba(0,0,0,1)"} />}
      breakLabel="..."
      renderOnZeroPageCount={()=> null}
      containerClassName={styles.pagination}
      previousLinkClassName={styles.previous}
      nextLinkClassName={styles.next}
      disabledClassName={styles.disabled}
      activeClassName={styles.active}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      {...props}
    />
  );
};

export default Pagination;
