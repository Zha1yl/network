import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const AddCategory = (props) => {
  const { open, handleClose } = props;
  const { createCategory } = useProducts();
  const [category, setCategory] = useState();
  const style = {
    position: "absolute",
    top: "30%",
    left: "30%",
    display: 700,
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
    borderRadius: 10,
  };
  const handleClick = () => {
    if (!category) {
      alert("Заполните поля!");
      return;
    } else {
      const newCategory = {
        name: category,
      };
      createCategory(newCategory);
      setCategory("");
    }
    handleClose();
  };
  return (
    <div>
      <Modal onClose={handleClose} open={open}>
        <Box sx={style}>
          <Typography id="modal-modal-title">
            Добавить новую категорию
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button onClick={handleClick}>Добавить</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCategory;
