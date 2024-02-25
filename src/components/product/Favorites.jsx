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

  const handleRemoveAndAddToCart = async (id, product) => {
    await removeFromFavorites(id);
    addProductToCart(product);
  };

  console.log(favorites);
  return (
    <div>
      <h2
        style={{
          margin: "1vw 0vw 0vw 14vw",
          fontFamily: "serif",
          color: "#3b3a39",
        }}
      >
        Избранные товары
      </h2>

      <div className="favorite">
        {favorites.map((elem) => (
          <div
            style={{
              marginBottom: "30px",
              borderRadius: "10px",
              width: "40vw",
              height: "13vw",
              backgroundColor: "white",
              border: "1px solid white",
              marginLeft: "3vw",
            }}
          >
            <div key={elem.id} className="favorite-container">
              <img src={elem.image} alt="" />
              <div className="favorite-content-right">
                <p>{elem.description}</p>
                <p>{elem.price} $</p>
                <Button onClick={() => handleRemoveAndAddToCart(elem.id, elem)}>
                  Добавить в корзину
                </Button>
                <IconButton onClick={() => removeFromFavorites(elem.id)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
