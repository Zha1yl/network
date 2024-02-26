import React, { useEffect } from "react";
import "./videoPage.css";
import { usePost } from "../components/context/PostContextProvider";

const VideoPage = () => {
  const { posts, getPosts } = usePost();
  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);
  return (
    <div className="video__page">
      {posts.map((elem) => {
        <div className="videoImg">
          <img src={elem.imageUrl} alt="" />
          <iframe
            className="video__video"
            id="fancybox-frame"
            allowFullScreen={true}
            webkitAllowFullScreen={true}
            mozAllowFullScreen={true}
            name="fancybox-frame1707985548812"
            frameBorder="0"
            width="300px"
            height="197px"
            hSpace="0"
            scrolling="auto"
            sandbox="allow-same-origin"
            src={elem.videoUrl}
          ></iframe>
        </div>;
      })}
    </div>
  );
};

export default VideoPage;
