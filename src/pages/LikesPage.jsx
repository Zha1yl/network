import React from "react";
import { usePost } from "../components/context/PostContextProvider";
import PostCard from "../components/post/PostCard";

const LikesPage = () => {
  const { likedPosts } = usePost();

  const likedPostsData = likedPosts.filter((post) =>
    likedPosts.includes(post.id)
  );

  return (
    <div>
      {likedPostsData.map((elem) => (
        <PostCard key={elem.id} elem={elem} />
      ))}
    </div>
  );
};

export default LikesPage;
