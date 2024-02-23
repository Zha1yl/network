import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { usePost } from "../../context/PostContextProvider";
import { Button } from "antd";
import "./post.css";
import { IconButton } from "@mui/material";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import DetailPost from "../DetailPost";
import { useAuth } from "../../context/AuthContextProvider";
import notAva from "../../assets/person/not_have_avatar_page.jpg";

const Post = ({ elem }) => {
  const { getOnePost } = usePost();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { deletePost } = usePost();

  const { getAllUsers, users } = useAuth();
  const { user } = useAuth();
  useEffect(() => {
    getAllUsers();
  }, []);
  // console.log(users);
  // console.log(user);
  // console.log(elem);
  // ! логика лайка

  const likes = JSON.parse(localStorage.getItem("likes")) || {};

  function likePost(postId, userId) {
    let likes = JSON.parse(localStorage.getItem("likes")) || {};

    if (likes[postId] && likes[postId][userId]) {
      likes[postId].count--;
      delete likes[postId][userId];
    } else {
      if (!likes[postId]) {
        likes[postId] = { count: 0 };
      }
      likes[postId].count++;
      likes[postId][userId] = true;
    }

    // Save updated likes to local storage
    localStorage.setItem("likes", JSON.stringify(likes));

    // Return updated like count
    return likes[postId].count;
  }

  // Get like count for the current post
  const likeCount = likePost(elem._id, user._id);

  // Пример использования функции likePost
  const postId = "123"; // ID поста
  const userId = "456"; // ID пользователя
  console.log(likePost(elem._id, user._id));

  return (
    <div class="post post--clickable">
      <div class="post__wrapper">
        <div class="post__center">
          <div className="center__block">
            <div className="center__block_img">
              {users.filter((u) => u._id === elem.user._id && u.avatarUrl)
                .length > 0 ? (
                <img
                  src={
                    users.filter((u) => u._id === elem.user._id)[0].avatarUrl
                  }
                  alt=""
                />
              ) : (
                <img src={notAva} alt="" />
              )}
            </div>
            <div>
              <p class="post__user">{elem.user.fullName}</p>
              <p class="post__user">{elem.updatedAt}</p>
            </div>
          </div>
          <p class="post__text">{elem.text}</p>
          <div class="post__video-container">
            {elem.videoUrl ? (
              <div className="post_and_film">
                <img
                  class="post_and_film1"
                  src={elem.imageUrl}
                  alt=""
                  onClick={() => {
                    handleOpen();
                    getOnePost(elem._id);
                  }}
                />
                <div className="iframes__block">
                  <div className="iframe__container">
                    <iframe
                      class="post__video"
                      id="fancybox-frame"
                      allowfullscreen="true"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      name="fancybox-frame1707985548812"
                      frameborder="0"
                      width="300px"
                      height="197px"
                      hspace="0"
                      scrolling="auto"
                      src={elem.videoUrl}
                    ></iframe>
                    <div className="iframe__container">
                      <iframe
                        class="post__video"
                        id="fancybox-frame"
                        allowfullscreen="true"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        name="fancybox-frame1707985548812"
                        frameborder="0"
                        width="300px"
                        height="197px"
                        hspace="0"
                        scrolling="auto"
                        src={elem.videoUrl}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <img
                  class="post__image"
                  src={elem.imageUrl}
                  alt=""
                  onClick={handleOpen}
                />
              </>
            )}
          </div>
          <div className="btns_container">
            <div className="post--clickable">
              <div className="post__wrapper">
                <div className="post__center">
                  <div
                    className="post__button post__button--like"
                    onClick={() => likePost(elem._id, user._id)}
                  >
                    <span className="post__like-icon">
                      {/* Conditional rendering of like icon */}
                      {likes[elem._id] && likes[elem._id][user._id] ? (
                        <>
                          <HeartOutlined />
                          <p>{likeCount}</p>
                        </>
                      ) : (
                        <>
                          <HeartFilled style={{ color: "red" }} />
                          {likeCount === 0 ? <></> : <p>{likeCount}</p>}
                        </>
                      )}
                    </span>
                    <div className="post__views-count">
                      <img
                        className="post__views_img"
                        src="https://static.vecteezy.com/ti/gratis-vektor/p1/3538260-mangekyou-sharingan-of-uchiha-itachi-amaterasu-und-tsukuyomi-kostenlos-vektor.jpg"
                        alt=""
                      />
                      <p>{elem.viewsCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {user && user._id === elem.user._id && (
              <button
                className="post__button post__button--delete"
                onClick={() => deletePost(elem._id, user.token)}
              >
                Delete
              </button>
            )}
          </div>
        </div>
        <DetailPost open={open} handleClose={handleClose} elem={elem._id} />
      </div>
    </div>
  );
};

export default Post;
