import { Box, Modal } from "@mui/material";
import React from "react";
import { usePost } from "../context/PostContextProvider";

const DetailPost = (props) => {
  const { onePost } = usePost();
  const style = {
    position: "absolute",
    top: "30%",
    left: "30%",
    width: 700,
    display: "flex",
    border: "2px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
    cursor: "pointer",
  };
  console.log(onePost);
  const { elem, open, handleClose } = props;

  const handleBoxClick = (event) => {
    event.stopPropagation();

    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
      >
        <Box sx={style} onClick={handleBoxClick}>
          <div>
            <img width={300} src={onePost.imageUrl} alt={onePost.title} />
          </div>
          <div>
            <h1>{onePost.title}</h1>
            <p>{onePost.text}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DetailPost;
