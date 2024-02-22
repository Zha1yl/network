import React, { useState } from "react";
import AddProduct from "../components/product/AddProduct";
import AddCategory from "../components/product/AddCategory";
import { Button } from "@mui/material";

const ProductPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Добавить категорию</Button>
      <AddCategory open={open} handleClose={handleClose} />
      <AddProduct />
    </div>
  );
};

export default ProductPage;
