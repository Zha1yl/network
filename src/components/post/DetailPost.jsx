import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { usePost } from "../context/PostContextProvider";

const DetailPost = (props) => {
  const { onePost } = usePost();
  const style = {
    position: "absolute",
    top: "45vw",
    left: "55vw",
    transform: "translate(-40vw, -25vw)",
    width: "85vw",
    maxWidth: "90vw",
    bgcolor: "rgba(255, 255, 255, 0.9)", // Серый прозрачный фон
    boxShadow: 24,
    p: "3vw",
    borderRadius: "2vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  console.log(onePost);
  const { elem, open, handleClose } = props;

  const handleBoxClick = (event) => {
    event.stopPropagation();
    handleClose();
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <Box sx={style} onClick={handleBoxClick}>
        <img
          width="100vw"
          height="400vw"
          style={{ objectFit: "cover", borderRadius: 8 }}
          src={onePost.imageUrl}
          alt={onePost.title}
        />
        <Typography variant="h5" mt={2}>
          {onePost.title}
        </Typography>
        <Typography variant="body1" mt={2}>
          {onePost.text}

        </Typography>
      </Box>
    </Modal>
  );
};

export default DetailPost;
