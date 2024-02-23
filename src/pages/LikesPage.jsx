import React from "react";

import Post from "../components/post/posts/Post";

const LikesPage = () => {
  return (
    <div>
      {likedPostsData.map((elem) => (
        <Post key={elem.id} elem={elem} />
      ))}
    </div>
  );
};

export default LikesPage;
