import { Button, Typography } from "antd";
import React, { useState } from "react";
import { usePost } from "../context/PostContextProvider";
import { TextField } from "@mui/material";

const AddPost = () => {
  const { addPost } = usePost();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    video: "",
  });

  const handleInput = (e) => {
    const obj = { ...post, [e.target.name]: e.target.value };
    setPost(obj);
  };

  const handleClick = () => {
    addPost(post);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "70px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Typography.Title level={4} style={{ marginTop: "75px" }}>
        Добавить пост
      </Typography.Title>
      <TextField
        onChange={handleInput}
        fullWidth
        name="title"
        label="Заголовок"
        variant="outlined"
        style={{ marginBottom: "16px", fontSize: "16px" }}
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="description"
        label="Описание"
        variant="outlined"
        style={{ marginBottom: "16px", fontSize: "16px" }}
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="image"
        label="Ссылка на изображение"
        variant="outlined"
        style={{ marginBottom: "16px", fontSize: "16px" }}
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="video"
        label="Ссылка на видео"
        variant="outlined"
        style={{ marginBottom: "16px", fontSize: "16px" }}
      />
      <Button
        onClick={handleClick}
        style={{ fontSize: "16px", borderRadius: "6px" }}
      >
        Добавить пост
      </Button>
    </div>
  );
};

export default AddPost;
