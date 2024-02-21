import React from "react";
import { useProducts } from "../context/ProductContextProvider";
import { useCart } from "../context/CartContextProvider";
import "./product.css";
import { IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ elem }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    useCart();
  const handleClick = () => {
    deleteProductFromCart(elem.id);
    deleteProduct(elem.id);
  };
  return (
    <div style={{ display: "flex", gap: "20px", ml: "191px" }}>
      <div class="product">
        <img src={elem.image} alt="" />
        <h3>{elem.description}</h3>
        <h3>{elem.category}</h3>
        <p class="price">{elem.price}</p>
        <IconButton
          sx={{
            backgroundColor: checkProductInCart(elem.id) ? "lightBlue" : "",
            color: checkProductInCart(elem.id) ? "white" : "",
          }}
          onClick={() => addProductToCart(elem)}
        >
          <AddShoppingCart />
        </IconButton>
        <IconButton onClick={() => navigate(`/edit/${elem.id}`)}>
          <EditNoteIcon />
        </IconButton>
        <IconButton onClick={handleClick}>
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductCard;
