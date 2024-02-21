import { Box, Modal } from "@mui/material";
import React from "react";

const DetailPost = (props) => {
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
  };
  const { elem, open, handleClose } = props;
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
      >
        <Box sx={style}>
          <div>
            <img width={300} src={elem.image} alt={elem.title} />
          </div>
          <div>
            <h1>{elem.title}</h1>
            <p>{elem.description}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DetailPost;
