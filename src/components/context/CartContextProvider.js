import React, { createContext, useContext } from "react";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);
const CartContextProvider = ({ children }) => {
  const values = {};
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
