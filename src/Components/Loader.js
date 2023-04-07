import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.circleSpinner}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
