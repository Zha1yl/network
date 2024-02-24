import React, { useEffect, useState } from "react";
import { Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../context/PostContextProvider";
import "./post.css";
import { HeartFilled, HeartOutlined, MoreOutlined } from "@ant-design/icons";
import DetailPost from "../DetailPost";
import { useAuth } from "../../context/AuthContextProvider";
import notAva from "../../assets/person/not_have_avatar_page.jpg";

const Post = ({ elem }) => {
  const { getOnePost, deletePost } = usePost();
  const [open, setOpen] = useState(false);

  const { user, getAllUsers, users } = useAuth();
  useEffect(() => {
    getAllUsers();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const moreIconStyle = {
    fontSize: "20px",
    color: "black",
    cursor: "pointer",
  };

  // Меню
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => console.log("Action 1")}>
        EDIT
      </Menu.Item>
      <Menu.Item key="2" onClick={() => deletePost(elem._id, user.token)}>
        DELETE
      </Menu.Item>
    </Menu>
  );

  // Логика лайка
  let likes = JSON.parse(localStorage.getItem("likes")) || {};

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

    // Сохранение обновленных лайков в локальное хранилище
    localStorage.setItem("likes", JSON.stringify(likes));

    // Возврат обновленного количества лайков
    return likes[postId].count;
  };

  // Получение количества лайков для текущего поста
  const likeCount = likePost(elem._id, user._id);

  return (
    <div className="post post--clickable">
      {user ? (
        <>
          <div className="post__wrapper">
            <div className="post__center">
              <div className="center__block">
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <div className="center__block_img">
                    {users &&
                    users.filter((u) => u._id === elem.user._id && u.avatarUrl)
                      .length > 0 ? (
                      <img
                        src={
                          users.filter((u) => u._id === elem.user._id)[0]
                            .avatarUrl
                        }
                        alt=""
                      />
                    ) : (
                      <img src={notAva} alt="" />
                    )}
                  </div>
                  <div>
                    <p className="post__user">{elem.user.fullName}</p>
                    <p className="post__user">{elem.updatedAt}</p>
                  </div>
                  {user && user._id === elem.user._id && (
                    <Dropdown
                      overlay={menu}
                      trigger={["click"]}
                      className="dropDown"
                    >
                      <MoreOutlined style={moreIconStyle} />
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
                  </div>
                ) : (
                  <>
                    <img
                      className="post__image23"
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
                          {/* Условный рендеринг иконки лайка */}
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
                        <p className="post__views-count">{elem.viewsCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DetailPost open={open} handleClose={handleClose} elem={elem._id} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Post;
