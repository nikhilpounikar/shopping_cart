import CartModal from "./components/CartModal";

import { createContext, useState, useContext } from "react";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart,setCart] = useState([]);

  const handleAdd = (price,itemName) => {

    const index = cart.findIndex((i)=> i.itemName===itemName);

    console.log(cart);

    if(index === -1){
      cart.push({
            quantity:1,
            itemName:itemName,
            price:price
          })
          setCart(cart);
    }else{
     
      cart[index].quantity++;
    }
  
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total <= 0) {
      return;
    }
    setTotal((prevState) => prevState - price);
    setItem(item - 1);
  };

  const clear = () => {
    setTotal(0);
    setItem(0);
    setCart([]);
  };

  const toggle = () => {
    console.log('togglih',showCart)
    setShowCart(!showCart);
  };

  return (
    <itemContext.Provider
      value={{
        total,
        item,
        handleAdd,
        handleRemove,
        clear,
        cart,
        showCart,
        setShowCart,
        toggle,
      }}
    >
      {showCart ?<CartModal/>:undefined }
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
