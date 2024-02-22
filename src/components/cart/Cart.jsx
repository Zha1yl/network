import React, { useEffect } from "react";
import "./cart.css";
import { useCart } from "../context/CartContextProvider";

const Cart = () => {
  const { getCart, cart, changeProductCount, deleteProductFromCart } =
    useCart();
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <div>
      <div className="cart">
        {cart.products.map((elem) => (
          <div className="cart_container" key={elem.id}>
            <div className="cart_left_side">
              <div className="cart_left_img">
                <img src={elem.item.image} alt="Picture" />
              </div>
              <div className="cart_left_p">
                <p>{elem.item.price}$</p>
                <p>{elem.item.description}</p>
                <div className="cart_btn_inp">
                  <input
                    onChange={(e) =>
                      changeProductCount(elem.item.id, e.target.value)
                    }
                    type="number"
                    min={1}
                    max={15}
                    defaultValue={elem.count}
                  />
                  <button onClick={() => deleteProductFromCart(elem.item.id)}>
                    Удалить
                  </button>
                  <button>В закладки</button>
                </div>
              </div>
            </div>
            <div className="cart_right_side">
              <p>Общая цена: {elem.subPrice}$</p>
              <button>Оплатить заказ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
