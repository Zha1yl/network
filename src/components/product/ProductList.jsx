import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import PaginationControl from "./Pagination";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
    getProducts();
  }, []);
  // !PAGINATION
  const maxItemOnPage = 4;
  const count = Math.ceil(products.length / maxItemOnPage);
  const productsOnPage = () => {
    const start = (page - 1) * maxItemOnPage;
    const end = start + maxItemOnPage;
    return products.slice(start, end);
  };
  const handleChange = (e, value) => {
    setPage(value);
  };
  return (
    <div>
      <div className="product-list-container">
        {productsOnPage().map((elem) => (
          <ProductCard key={elem.id} elem={elem} className="product-card" />
        ))}
      </div>
      <PaginationControl
        count={count}
        page={page}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ProductList;
