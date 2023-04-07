import React from "react";

import styles from "./ItemContainer.module.css";
const ItemContainer = (props) => {
  return (
    <div className={props.className} key={props.key}>
      <img
        className={styles.img}
        src={props.itemImage}
        alt="image of the item being sold"
      />

      <p className={styles.title}>{props.itemTitle}</p>
      <p className={styles.price}>{props.itemPrice} €</p>
    </div>
  );
};

export default ItemContainer;
