import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const DetailProduct = (props) => {
  const style = {
    position: "absolute",
    top: "8vw",
    left: "5vw",
    width: "83vw",
    height: "40vw",
    display: "flex",
    overflow: "scroll",
    border: "2px solid black",
    boxShadow: "20vw",
    bgcolor: "background.paper",
    p: "4vw",
  };

  const { elem, open, handleClose } = props;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [productId, setProductId] = useState(null); // Хранение id текущего фильма

  useEffect(() => {
    // Получение сохраненных комментариев из локального хранилища по id фильма
    const storedComments =
      JSON.parse(localStorage.getItem(`comments_${productId}`)) || [];
    setComments(storedComments);
  }, [productId]); // <-- Добавленный массив зависимостей

  useEffect(() => {
    if (open) {
      setProductId(elem.id);
    }
  }, [open, elem]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    // Добавление нового комментария в список комментариев
    const newComments = [...comments, comment];
    setComments(newComments);
    // Сохранение обновленного списка комментариев в локальное хранилище по id фильма
    localStorage.setItem(`comments_${productId}`, JSON.stringify(newComments));
    setComment("");
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <Box sx={style}>
        <div>
          <img width={200} src={elem.image} alt={elem.title} />
        </div>
        <div style={{ marginLeft: "2vw" }}>
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
          <p style={{ fontWeight: "bold" }}>{elem.price} $</p>
          <div
            style={{ marginTop: "2vw", display: "flex", alignItems: "center" }}
          >
            <TextField
              value={comment}
              onChange={handleCommentChange}
              label="Добавить комментарий"
              multiline
              fullWidth
              variant="outlined"
            />
            <Button
              onClick={handleAddComment}
              variant="contained"
              color="secondary"
              style={{ marginLeft: "1vw" }}
            >
              Добавить комментарий
            </Button>
          </div>
          <div>
            <h3>Комментарии:</h3>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default DetailProduct;
