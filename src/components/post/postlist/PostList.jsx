import React, { useEffect } from "react";
import { usePost } from "../../context/PostContextProvider";
import Post from "../posts/Post";
import "./postlist.css";
import { useSearchParams } from "react-router-dom";

const PostList = () => {
  const { getPosts, posts } = usePost();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getPosts();
  }, [searchParams]);

  const filteredPosts = posts.filter((post) => {
    // Применяем фильтрацию по поисковому запросу
    const searchQuery = searchParams.get("q") || "";
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  console.log(posts);
  return (
    <div className="postList">
      <div className="postListWrapper">
        {filteredPosts.map((elem) => (
          <Post key={elem._id} elem={elem} />
        ))}
        <>
          {/* {posts.map((elem) => (
            <>
              <Post key={elem._id} elem={elem} />
            </>
          ))} */}
        </>
      </div>
    </div>
  );
};

export default PostList;
