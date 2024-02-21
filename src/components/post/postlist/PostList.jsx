import React, { useEffect } from "react";
import { usePost } from "../../context/PostContextProvider";
import Post from "../posts/Post";
import "./postlist.css";

const PostList = () => {
  const { getPosts, posts } = usePost();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="postList">
      <div className="postListWrapper">
        <>
          {posts &&
            posts.map((elem) => (
              <>
                <Post key={elem.id} elem={elem} />
              </>
            ))}
        </>
      </div>
    </div>
  );
};

export default PostList;
