import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../context/PostContextProvider";
import { Button } from "antd";
import "./post.css";
import { IconButton } from "@mui/material";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import DetailPost from "../DetailPost";

const Post = ({ elem }) => {
  const [like, setLike] = useState(elem.like);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setLike((prevLike) => prevLike + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { deletePost } = usePost();
  return (
    <div className="post" onClick={handleOpen}>
      <div className="postWrapper">
        <div className="postCenter">
          <span className="postTitle">{elem.title}</span>
          <span className="postDescription">{elem.description}</span>
          <img className="postImg" src={elem.image} alt="" />
          <video className="postVideo" src={elem.video} />
          <Button
            onClick={() => deletePost(elem.id)}
            color="secondary"
            variant="outlined"
            size="medium"
          >
            Delete
          </Button>
          <IconButton onClick={handleLikeClick}>
            {isLiked ? (
              <HeartFilled style={{ color: "red" }} />
            ) : (
              <HeartOutlined />
            )}
          </IconButton>
        </div>
        <DetailPost open={open} handleClose={handleClose} elem={elem} />
      </div>
    </div>
  );
};

export default Post;
