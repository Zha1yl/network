import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { useCart } from "../context/CartContextProvider";
import "./product.css";
import { IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const ProductCard = ({ elem }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    useCart();
  const { addToFavorites } = useFavorites();
  const [like, setLike] = useState(false);

  const handleClick = () => {
    deleteProductFromCart(elem.id);
    deleteProduct(elem.id);
  };

  const handleLikeClick = () => {
    setLike(!like);
    addToFavorites(elem);
  };

  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <IconButton
          style={{ position: "absolute", top: 0, right: 0 }}
          aria-label="Добавить в избранное"
          title="Добавить в избранное"
          onClick={handleLikeClick}
        >
          {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <div style={{ display: "flex", gap: "20px", ml: "191px" }}>
          <div class="product">
            <img src={elem.image} alt="" />
            <p class="price">{elem.price} $</p>
            <h3>{elem.description}</h3>
            <h3>{elem.category}</h3>
            <IconButton
              sx={{
                backgroundColor: checkProductInCart(elem.id) ? "lightBlue" : "",
                color: checkProductInCart(elem.id) ? "white" : "",
              }}
              onClick={() => addProductToCart(elem)}
              title="Добавить в корзину"
            >
              <AddShoppingCart />
            </IconButton>
            <IconButton
              title="Редактировать товар"
              onClick={() => navigate(`/edit/${elem.id}`)}
            >
              <EditNoteIcon />
            </IconButton>
            <IconButton title="Удалить товар" onClick={handleClick}>
              <DeleteOutlineIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
