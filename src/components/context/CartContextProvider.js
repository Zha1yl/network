import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../../helpers/const";
import {
  calcSubPrice,
  calcTotalPrice,
  getLocalStorage,
  getProductsCountInCart,
} from "../../helpers/functions";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);
const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")) || {},
  cartLength: getProductsCountInCart() || 0,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // !GET
  const getCart = () => {
    let cart = getLocalStorage("cart");
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  // !CREATE
  const addProductToCart = (product) => {
    let cart = getLocalStorage("cart");
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    if (!cart.products) {
      cart.products = [];
    }
    let productsToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (productsToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  // ! проверка товара в корзине
  const checkProductInCart = (id) => {
    let cart = getLocalStorage("cart");
    if (cart && cart.products) {
      let newCart = cart.products.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    }
  };
  // !изменение стоимости за один товар
  const changeProductCount = (id, count) => {
    let cart = getLocalStorage("cart");
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  // !DELETE
  const deleteProductFromCart = (id) => {
    let cart = getLocalStorage("cart");
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const values = {
    cart: state.cart,
    getCart,
    addProductToCart,
    checkProductInCart,
    changeProductCount,
    deleteProductFromCart,
    getProductsCountInCart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
