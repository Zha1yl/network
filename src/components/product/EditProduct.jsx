import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import { Box, TextField } from "@mui/material";
import { Button, Typography } from "antd";

const EditProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct, editProduct } = useProducts();
  const [product, setProduct] = useState({
    image: "",
    price: 0,
    description: "",
    category: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    editProduct(id, product);
  };
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (product) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        EDIT PRODUCT
      </Typography>
      <TextField
        value={product.image}
        onChange={handleInput}
        fullWidth
        name="image"
        label="Товар"
        variant="outlined"
      />
      <TextField
        value={product.price}
        onChange={handleInput}
        fullWidth
        name="price"
        label="Цена"
        variant="outlined"
      />
      <TextField
        value={product.category}
        onChange={handleInput}
        fullWidth
        name="category"
        label="Категория"
        variant="outlined"
      />
      <TextField
        value={product.description}
        onChange={handleInput}
        fullWidth
        name="description"
        label="Описание"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleClick}>
        SAVE
      </Button>
    </Box>
  );
};

export default EditProduct;
