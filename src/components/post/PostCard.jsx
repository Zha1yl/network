import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../context/PostContextProvider";
import { Button } from "antd";
import { AddShoppingCart } from "@mui/icons-material";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

const PostCard = ({ elem }) => {
  const navigate = useNavigate();
  const { deletePost } = usePost();
  const [like, setLike] = useState(elem.like);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setLike((prevLike) => prevLike + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
  };
  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "none",
        marginTop: "75px",
        width: { md: "30vw", lg: "19vw" },
        gridColumn: "span 1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent sx={{ padding: "20px 5px 0px 5px" }}>
        <Typography variant="h5" fontSize="24" fontWeight={700} component="div">
          {elem.title}
        </Typography>
        <CardMedia
          component="img"
          image={elem.image}
          alt={elem.title}
          sx={{ height: 200, borderRadius: 4 }}
        />
        <Button
          onClick={() => navigate(`/edit/${elem.id}`)}
          color="primary"
          variant="outlined"
          size="medium"
        >
          Редактировать
        </Button>
        <Button
          onClick={() => deletePost(elem.id)}
          color="secondary"
          variant="outlined"
          size="medium"
        >
          Удалить
        </Button>
        <IconButton>
          <AddShoppingCart />
        </IconButton>
        <IconButton onClick={handleLikeClick}>
          {isLiked ? (
            <HeartFilled style={{ color: "red" }} />
          ) : (
            <HeartOutlined />
          )}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default PostCard;
