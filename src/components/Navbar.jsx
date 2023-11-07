import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemContext";

function Navbar() {
  const { item, total, handleReset } = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div >
        <button className={styles.itemButton} onClick={() => handleReset()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Navbar;
