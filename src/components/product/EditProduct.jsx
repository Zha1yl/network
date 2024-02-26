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
    const { name, value } = e.target;
    const updatedProduct = {
      ...product,
      [name]: name === "price" ? Number(value) : value,
    };
    setProduct(updatedProduct);
  };

  const handleClick = () => {
    editProduct(id, product);
  };

  useEffect(() => {
    getOneProduct(id);
  }, [id]); // Добавление зависимости id

  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  return (
    <Box
      sx={{
        margin: "1vw 0vw 0vw 17vw",
        width: "50vw",
        height: 500,
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
