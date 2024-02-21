import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../context/PostContextProvider";
import { Button } from "antd";
import "./post.css";
import { IconButton } from "@mui/material";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useAuth } from "../../context/AuthContextProvider";

const Post = ({ elem }) => {
  const [like, setLike] = useState(elem.like);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setLike((prevLike) => prevLike + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
  };
  console.log(elem);
  const { deletePost } = usePost();
  const { user } = useAuth();
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postCenter">
          <p>{elem.user.fullName}</p>
          <span className="postTitle">{elem.title}</span>
          <span className="postTitle">{elem.text}</span>
          <img className="postImg" src={elem.imageUrl} alt="" />
          <iframe
            id="fancybox-frame"
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            name="fancybox-frame1707985548812"
            frameborder="0"
            width={"500px"}
            height={"150px"}
            hspace="0"
            scrolling="auto"
            src={elem.videoUrl}
          ></iframe>
          <Button
            onClick={() => deletePost(elem._id, user.token)}
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
          <p>{elem.viewsCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
