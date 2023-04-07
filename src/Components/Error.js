import React from "react";
import styles from "./Error.module.css";

const Footer = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default Footer;
