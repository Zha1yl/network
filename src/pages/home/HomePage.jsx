import React, { useState } from "react";
import Navbar from "../../components/home/navbar/Navbar";
import SideBar from "../../components/home/sidebar/SideBar";
import PostList from "../../components/post/postlist/PostList";
import "./homePage.css";
import { Button, Input } from "@mui/material";
import { usePost } from "../../components/context/PostContextProvider";

const HomePage = () => {
  const { addPost } = usePost();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    video: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleClick = () => {
    addPost(post);
    // Очищаем поля после добавления поста
    setPost({
      title: "",
      description: "",
      image: "",
      video: "",
    });
  };
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <SideBar />
        <div className="homeContent">
          <div className="addPostForm">
            <Input
              onChange={handleInput}
              name="title"
              value={post.title}
              placeholder="Название поста"
              style={{ marginBottom: "16px", fontSize: "16px" }}
            />
            <Input
              onChange={handleInput}
              name="description"
              value={post.description}
              placeholder="Описание"
              style={{ marginBottom: "16px", fontSize: "16px" }}
            />
            <Input
              onChange={handleInput}
              name="image"
              value={post.image}
              placeholder="Ссылка на изображение"
              style={{ marginBottom: "16px", fontSize: "16px" }}
            />
            <Input
              onChange={handleInput}
              name="video"
              value={post.video}
              placeholder="Ссылка на видео"
              style={{ marginBottom: "16px", fontSize: "16px" }}
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

export default HomePage;
