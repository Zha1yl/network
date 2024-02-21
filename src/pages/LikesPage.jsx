import React from "react";
import { usePost } from "../components/context/PostContextProvider";
import Post from "../components/post/posts/Post";

const LikesPage = () => {
  const { likedPosts } = usePost();

  const likedPostsData = likedPosts.filter((post) =>
    likedPosts.includes(post.id)
  );

  return (
    <div>
      {likedPostsData.map((elem) => (
        <Post key={elem.id} elem={elem} />
      ))}
    </div>
  );
};

export default LikesPage;
