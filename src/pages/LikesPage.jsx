import React, { useEffect } from "react";
import { usePost } from "../components/context/PostContextProvider";
import Post from "../components/post/posts/Post";

const LikesPage = () => {
  const { likedPosts } = usePost();

  // useEffect(() => {
  //   const storedLikedPosts = JSON.parse(localStorage.getItem("likedPosts"));

  //   if (storedLikedPosts) {
  //     setLikedPosts(storedLikedPosts);
  //   }
  // }, [setLikedPosts]);

  // useEffect(() => {
  //   localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  // }, [likedPosts]);

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
