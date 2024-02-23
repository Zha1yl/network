import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../../helpers/const";
import {
  getLocalStorage,
  getProductsCountInFavorites,
} from "../../helpers/functions";
const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);
const INIT_STATE = {
  favorites: [],
  favorLength: getProductsCountInFavorites() || [],
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_FAVORITES:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};
const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // !GET
  const getFavorites = () => {
    let favorites = getLocalStorage("favorites");
    if (!favorites) {
      favorites = [];
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    dispatch({
      type: ACTIONS.GET_FAVORITES,
      payload: favorites,
    });
  };
  //   !ADD
  const addToFavorites = (product) => {
    let favorites = getLocalStorage("favorites");
    if (!favorites) {
      favorites = [];
    }
    if (!favorites.some((item) => item.id === product.id)) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      dispatch({
        type: ACTIONS.GET_FAVORITES,
        payload: favorites,
      });
    }
  };
  //   !DELETE
  const removeFromFavorites = (productId) => {
    let favorites = getLocalStorage("favorites");
    favorites = favorites.filter((item) => item.id !== productId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    dispatch({
      type: ACTIONS.GET_FAVORITES,
      payload: favorites,
    });
  };

  const values = {
    getFavorites,
    favorites: state.favorites,
    addToFavorites,
    removeFromFavorites,
    getProductsCountInFavorites,
  };
  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
