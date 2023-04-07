import React from "react";

import styles from "./Select.module.css";

const Select = (props) => {
  return (
    <>
      <select
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={styles.select}
      >
        <option value="">Select</option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
