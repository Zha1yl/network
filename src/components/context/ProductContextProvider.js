import React, { createContext, useContext } from "react";

const productContext = createContext();
export const useProducts = () => useContext(productContext);
const ProductContextProvider = ({ children }) => {
  const values = {};
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
