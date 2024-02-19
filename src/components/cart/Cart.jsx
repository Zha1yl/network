import React, { useEffect } from "react";
import "./cart.css";
import { useCart } from "../context/CartContextProvider";

const Cart = () => {
  const { getCart, cart } = useCart();
  useEffect(() => {
    getCart();
  }, []);
  return <div></div>;
};

export default Cart;
