import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";

function CartModal() {
  const { toggle, clear,cart,total } = useValue();

  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      <div className={styles.clearButton} onClick={clear}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        
         { cart.map((item,index)=>{
           return(  <div className={styles.cartCard} key={index}>
             <h1 >{item.itemName}</h1>
             <h3>X {item.quantity}</h3>
             <h3>X {item.quantity*item.price}</h3>
           </div>)
          })
        }
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>{total}</div>
        <div className={styles.totalPrice}>$Price</div>
      </div>
    </div>
  );
}

export default CartModal;
