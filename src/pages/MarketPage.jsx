import React from "react";
import ProductList from "../components/product/ProductList";
import { Link } from "react-router-dom";
import Filter from "../components/product/Filter";

const MarketPage = () => {
  return (
    <div>
      <div>
        <div style={{ width: "300px", flex: "none", marginTop: "50px" }}>
          <Filter />
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default MarketPage;
