import React, { useState } from "react";
import PostList from "../../components/post/postlist/PostList";
import "./homePage.css";
import { Button, Input, TextField } from "@mui/material";
import { usePost } from "../../components/context/PostContextProvider";
import { useAuth } from "../../components/context/AuthContextProvider";

const Home = () => {
  const { addPost } = usePost();
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const handleClick = () => {
    if (!title || !text || !imageUrl) {
      setError("Please fill in all required fields.");
      return;
    }
    tags.split("#");
    addPost({ title, text, imageUrl, videoUrl, tags }, user.token);
    setTitle("");
    setText("");
    setImageUrl("");
    setVideoUrl("");
    setTags("");
    setError("");
  };

  return (
    <div>
      <img src="" alt="" />

      <div className="homeContainer">
        <div className="homeContent">
          <div className="addPostForm">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Input
              onChange={handleTitleChange}
              value={title}
              type="text"
              placeholder="Название поста"
              style={{
                marginBottom: "16px",
                fontSize: "16px",
                marginRight: "16px",
              }}
            />
            <Input
              onChange={handleTextChange}
              value={text}
              type="text"
              placeholder="Описание"
              style={{
                marginBottom: "16px",
                fontSize: "16px",
                marginRight: "16px",
              }}
            />
            <Input
              onChange={handleImageUrlChange}
              value={imageUrl}
              type="url"
              placeholder="Ссылка на изображение"
              style={{
                marginBottom: "16px",
                fontSize: "16px",
                marginRight: "16px",
              }}
            />
            <Input
              onChange={handleVideoUrlChange}
              value={videoUrl}
              type="url"
              placeholder="Ссылка на изображение"
              style={{
                marginBottom: "16px",
                fontSize: "16px",
                marginRight: "16px",
              }}
            />
            {/* TextField для ввода тегов */}
            <Input
              onChange={handleTagsChange}
              value={tags}
              placeholder="Тэги (разделите запятыми)"
              style={{
                marginBottom: "16px",
                fontSize: "16px",
                marginRight: "16px",
              }}
            />
            <Button
              onClick={handleClick}
              style={{ fontSize: "16px", borderRadius: "6px" }}
            >
              Добавить пост
            </Button>
          </div>
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Home;
