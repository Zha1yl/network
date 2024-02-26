import React, { useEffect, useState } from "react";
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
import DetailProduct from "./DetailProduct";
import { useFavorites } from "../context/FavoritesContext";
const ProductCard = ({ elem }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    useCart();
  const { addToFavorites, checkProductInFavorites, removeFromFavorites } =
    useFavorites();
  const [like, setLike] = useState(false);
  useEffect(() => {
    setLike(checkProductInFavorites(elem.id));
  }, [elem.id, checkProductInFavorites]);

  const handleClick = () => {
    deleteProductFromCart(elem.id);
    deleteProduct(elem.id);
  };

  const handleLikeClick = () => {
    setLike(!like);
    if (!like) {
      addToFavorites(elem);
    } else {
      removeFromFavorites(elem.id);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Открывать детальный обзор только при клике на изображение или описание товара
  const handleDetailClick = (event) => {
    // Проверяем, что клик произошел не на кнопке добавления в корзину
    if (!event.target.closest(".add-to-cart-button")) {
      handleOpen();
    }
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
        <div>
          <div class="product" onClick={handleDetailClick}>
            <img src={elem.image} alt="" />
            <p class="price">{elem.price} $</p>
            <h3>{elem.description}</h3>
            <h3>{elem.category}</h3>
            <IconButton
              className="add-to-cart-button"
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
      <DetailProduct open={open} handleClose={handleClose} elem={elem} />
    </div>
  );
};

export default ProductCard;
