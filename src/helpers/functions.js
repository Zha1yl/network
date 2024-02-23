export const getLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};

export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.subPrice, 0);
  return totalPrice;
};

export const calcSubPrice = (elem) => {
  return elem.item.price * elem.count;
};

export const getProductsCountInCart = () => {
  let cart = getLocalStorage("cart");
  return cart ? cart.products.length : 0;
};
