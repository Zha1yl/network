import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../context/PostContextProvider";
import { Button } from "antd";
import "./post.css";
import { IconButton } from "@mui/material";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

const Post = ({ elem }) => {
  const [like, setLike] = useState(elem.like);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setLike((prevLike) => prevLike + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
  };
  const { deletePost } = usePost();
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postCenter">
          <span className="postTitle">{elem.title}</span>
          <span className="postTitle">{elem.description}</span>
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
      </div>
    </div>
  );
};

export default Post;
