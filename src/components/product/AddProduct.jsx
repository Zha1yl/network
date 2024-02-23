import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import CategorySelect from "./CategorySelect";

const AddProduct = () => {
  const { addProduct, categories, getCategories } = useProducts();
  const [product, setProduct] = useState({
    image: "",
    price: 0,
    category: "",
    description: "",
  });
  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);

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
    addProduct(product);
  };
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
        Добавление товаров
      </Typography>
      <TextField
        onChange={handleInput}
        fullWidth
        name="image"
        label="Картина"
        variant="outlined"
      />
      <CategorySelect categories={categories} handleInput={handleInput} />
      <TextField
        onChange={handleInput}
        fullWidth
        name="price"
        label="Цена"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="description"
        label="Описание"
        variant="outlined"
      />
      <Button onClick={handleClick}>Добавить товар</Button>
    </Box>
  );
};

export default AddProduct;
