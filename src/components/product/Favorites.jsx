import React, { useEffect } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContextProvider";
import { Button, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Favorites = () => {
  const { getFavorites, favorites, removeFromFavorites } = useFavorites();
  const { addProductToCart } = useCart();

  useEffect(() => {
    getFavorites();
  }, []);

  const handleRemoveAndAddToCart = async (product) => {
    await removeFromFavorites(product);
    addProductToCart(product);
  };

  console.log(favorites);
  return (
    <div>
      <h2>Избранные товары</h2>
      <div className="favorite">
        {favorites.map((elem) => (
          <div key={elem.id} className="favorite-container">
            <img src={elem.image} alt="" />
            <div>
              <p>{elem.price}$</p>
              <p>{elem.description}</p>
              <Button onClick={() => handleRemoveAndAddToCart(elem.id)}>
                Добавить в корзину
              </Button>
              <IconButton onClick={() => removeFromFavorites(elem.id)}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
