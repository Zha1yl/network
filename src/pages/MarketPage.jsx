import React from "react";
import ProductList from "../components/product/ProductList";
import { Link } from "react-router-dom";
import Filter from "../components/product/Filter";

const MarketPage = () => {
  return (
    <div>
      <div className="market_head">
        <div className="market_head_p">
          <Link className="link_no_underline" to={"/market"}>
            Все товары
          </Link>
          <Link className="link_no_underline" to={"/favorites"}>
            Избранные
          </Link>
          <div className="market_head_cart">
            <Link className="link_no_underline" to={"/cart"}>
              Корзина
            </Link>
          </div>
        </div>
      </div>
      <div style={{ width: "300px", flex: "none", marginTop: "50px" }}>
        <Filter />
      </div>
      <ProductList />
    </div>
  );
};

export default MarketPage;
