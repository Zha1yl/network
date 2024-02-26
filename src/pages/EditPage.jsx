import React, { useEffect, useState } from "react";
import { Button, Input, TextField } from "@mui/material";
import { useAuth } from "../components/context/AuthContextProvider";
import { usePost } from "../components/context/PostContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const { user, users } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const { editPost, getOnePost, onePost } = usePost();
  const [title, setTitle] = useState(onePost.title);
  const [text, setText] = useState(onePost.text);
  const [imageUrl, setImageUrl] = useState(onePost.imageUrl);
  const [videoUrl, setVideoUrl] = useState(onePost.videoUrl);
  const [fullVideoUrl, setFullVideoUrl] = useState(onePost.fullVideoUrl);
  const [error, setError] = useState("");

  useEffect(() => {
    getOnePost(id);
  }, []);

  useEffect(() => {
    if (onePost) {
      setTitle(onePost.title);
      setText(onePost.text);
      setImageUrl(onePost.imageUrl);
      setVideoUrl(onePost.videoUrl);
      setFullVideoUrl(onePost.fullVideoUrl);
    }
  }, [onePost]);

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

  const handleFullVideoUrlChange = (e) => {
    setFullVideoUrl(e.target.value);
  };

  const moreIconStyle = {
    fontSize: "20px",
    color: "black",
    cursor: "pointer",
  };

  const handleClick = () => {
    if (!title || !text || !imageUrl) {
      setError("Please fill in all required fields.");
      return;
    }
    editPost(
      onePost._id,
      { title, text, imageUrl, videoUrl, fullVideoUrl },
      user.token
    );
    setTitle("");
    setText("");
    setImageUrl("");
    setVideoUrl("");
    setFullVideoUrl("");
    setError("");
    navigate("/");
  };

  return (
    <div>
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
          placeholder="Ссылка на трейлер"
          style={{ marginBottom: "16px", fontSize: "16px" }}
        />
        <Input
          onChange={handleFullVideoUrlChange}
          value={fullVideoUrl}
          type="url"
          placeholder="Ссылка на фильм"
          style={{ marginBottom: "16px", fontSize: "16px" }}
        />
        {/* TextField для ввода тегов */}
        <Button
          onClick={handleClick}
          style={{ fontSize: "16px", borderRadius: "6px" }}
        >
          Редактировать
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
