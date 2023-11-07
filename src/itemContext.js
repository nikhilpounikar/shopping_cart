import { useState,useContext,createContext } from "react";

const useValue = ()=>{

    const value = useContext(itemContext);
    return value;
}

const itemContext = createContext();

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

  return (
    <itemContext.Provider value={{ total, setTotal, item, setItem }}>
      {children}
    </itemContext.Provider>
  );
}

export { itemContext,useValue };

export default CustomItemContext;
