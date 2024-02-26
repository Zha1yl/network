import React, { useEffect, useState } from "react";
import { Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../context/PostContextProvider";
import { useAuth } from "../../context/AuthContextProvider";
import notAva from "../../assets/person/not_have_avatar_page.jpg";
import DetailPost from "../DetailPost";
import { HeartFilled, HeartOutlined, MoreOutlined } from "@ant-design/icons";
import "./post.css";

const Post = ({ elem }) => {
  const { getOnePost, deletePost } = usePost();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, getAllUsers, users } = useAuth();

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const likePost = (postId, userId) => {
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

    localStorage.setItem("likes", JSON.stringify(likes));

    return likes[postId].count;
  };

  const likeCount = likePost(elem._id, user && user._id);

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => {
          navigate(`/edit/${elem._id}`);
        }}
      >
        EDIT
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => deletePost(elem._id, user && user.token)}
      >
        DELETE
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="post post--clickable">
      {user && (
        <div className="post__wrapper">
          <div className="post__center">
            <div className="center__block">
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <div className="center__block_img">
                  {users &&
                  users.find((u) => u._id === elem.user._id && u.avatarUrl) ? (
                    <img
                      src={users.find((u) => u._id === elem.user._id).avatarUrl}
                      alt=""
                    />
                  ) : (
                    <img src={notAva} alt="" />
                  )}
                </div>
                <div>
                  <p className="post__user1">{elem.user.fullName}</p>
                  <p className="post__user">{elem.updatedAt}</p>
                </div>
                {user._id === elem.user._id && (
                  <Dropdown
                    overlay={menu}
                    trigger={["click"]}
                    className="dropDown"
                  >
                    <MoreOutlined
                      style={{
                        fontSize: "2vw",
                        color: "black",
                        cursor: "pointer",
                      }}
                    />
                  </Dropdown>
                )}
              </div>
            </div>
            <p className="post__text">{elem.text}</p>
            <div className="post__video-container">
              {elem.videoUrl ? (
                <div className="post_and_film">
                  <img
                    className="post_and_film1"
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
                        className="post__video"
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
                        src={elem.videoUrl}
                      ></iframe>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  className="post__image23"
                  src={elem.imageUrl}
                  alt=""
                  onClick={handleOpen}
                />
              )}
            </div>
            <div className="btns_container">
              <div className="post--clickable">
                <div className="post__center">
                  <div
                    className="post__button post__button--like"
                    onClick={() => likePost(elem._id, user._id)}
                  >
                    <span className="post__like-icon">
                      {localStorage.getItem("likes") &&
                      JSON.parse(localStorage.getItem("likes"))[elem._id] &&
                      JSON.parse(localStorage.getItem("likes"))[elem._id][
                        user._id
                      ] ? (
                        <>
                          <HeartOutlined />
                          {likeCount}
                        </>
                      ) : (
                        <>
                          <HeartFilled style={{ color: "red" }} />
                          {likeCount !== 0 && likeCount}
                        </>
                      )}
                    </span>
                    <p className="post__views-count">{elem.viewsCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <DetailPost open={open} handleClose={handleClose} elem={elem._id} />
    </div>
  );
};

export default Post;
