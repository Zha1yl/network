import React, { useEffect } from "react";
import "./cart.css";
import { useCart } from "../context/CartContextProvider";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, Paper, TableCell } from "@mui/material";

const Cart = () => {
  const { getCart, cart, changeProductCount, deleteProductFromCart } =
    useCart();
  useEffect(() => {
    getCart();
  }, []);
  return <div></div>;
};

export default Cart;
