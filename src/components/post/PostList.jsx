import React, { useEffect } from "react";
import { usePost } from "../context/PostContextProvider";
import { Box } from "@mui/material";
import PostCard from "./PostCard";

const PostList = () => {
  const { getPosts, posts } = usePost(
    useEffect(() => {
      getPosts();
    }, [])
  );
  const currentData = () => {
    return posts;
  };
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          height: "auto",
        }}
      >
        {currentData().map((elem) => (
          <PostCard key={elem.id} elem={elem} />
        ))}
      </Box>
    </div>
  );
};

export default PostList;
