import React, { useEffect, useState } from "react";
import { Menu, Dropdown } from "antd";
import { json, useNavigate } from "react-router-dom";
import { usePost } from "../../context/PostContextProvider";
import "./post.css";
import { HeartFilled, HeartOutlined, MoreOutlined } from "@ant-design/icons";
import DetailPost from "../DetailPost";
import { useAuth } from "../../context/AuthContextProvider";
import notAva from "../../assets/person/not_have_avatar_page.jpg";

const Post = ({ elem }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { deletePost } = usePost();

  const { getAllUsers, users } = useAuth();
  const { user } = useAuth();
  useEffect(() => {
    getAllUsers();
  }, []);
  console.log(users);
  console.log(user);


  const moreIconStyle = {
    fontSize: "2vw",
    color: "black",
    cursor: "pointer",
  };

  // Меню
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => console.log("Action 1")}>
        EDIT
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => user && deletePost(elem._id, user.token)}
      >
        DELETE
      </Menu.Item>
    </Menu>
  );

  console.log(elem);
  // ! логика лайка

  // Функция для постановки лайка
  function likePost(postId, userId) {
    // Получаем текущее состояние лайков из localStorage
    let likes = JSON.parse(localStorage.getItem("likes")) || {};

    // Проверяем, есть ли уже лайк от данного пользователя
    if (likes[postId] && likes[postId][userId]) {
      // Если да, уменьшаем счетчик лайков и удаляем лайк пользователя
      likes[postId].count--;
      delete likes[postId][userId];
    } else {
      // Если нет, увеличиваем счетчик лайков и добавляем лайк пользователя
      if (!likes[postId]) {
        likes[postId] = { count: 0 };
      }
      likes[postId].count++;
      likes[postId][userId] = true;
    }

    // Сохраняем обновленное состояние лайков в localStorage
    localStorage.setItem("likes", JSON.stringify(likes));

    // Возвращаем обновленное количество лайков
    return likes[postId].count;
  }

  // Пример использования функции likePost
  const postId = "123"; // ID поста
  const userId = "456"; // ID пользователя
  const likeCount = likePost(postId, userId);
  console.log("Количество лайков:", likeCount);

  return (
    <div class="post post--clickable">
      <div class="post__wrapper">
        <div class="post__center">
          <div className="center__block">
            <div>
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
                <p className="post__user">{elem.user.fullName}</p>
                <p className="post__user">{elem.updatedAt}</p>
              </div>
            </div>
            <Dropdown overlay={menu} trigger={["click"]}>
              <MoreOutlined style={moreIconStyle} />
            </Dropdown>
          </div>
          <p className="post__text">{elem.text}</p>
          <div className="post__video-container">
            {elem.videoUrl ? (
              <div className="post_and_film">
                <img
                  className="post_and_film1"
                  src={elem.imageUrl}
                  alt=""
                  onClick={handleOpen}
                />
                <div className="iframes__block">
                  <div className="iframe__container">
                    <iframe
                      className="post__video"
                      id="fancybox-frame"
                      allowfullscreen="true"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      name="fancybox-frame1707985548812"
                      frameborder="0"
                      width="300vw"
                      height="197vw"
                      hspace="0"
                      scrolling="auto"
                      src={elem.videoUrl}
                    ></iframe>
                    <div className="iframe__container">
                      <iframe
                        className="post__video"
                        id="fancybox-frame"
                        allowfullscreen="true"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        name="fancybox-frame1707985548812"
                        frameborder="0"
                        width="300vw"
                        height="197vw"
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
                  className="post__image"
                  src={elem.imageUrl}
                  alt=""
                  onClick={handleOpen}
                />
              </>
            )}
          </div>

          <div className="btns_container">
            <div

              class="post__button post__button--like"
              onClick={() => likePost(elem._id, user._id)}
            >
              <span class="post__like-icon">
                <HeartFilled style={{ color: "red" }} />
                <HeartOutlined />
                {likeCount > 0 ? (
                  <>
                    <p>{likeCount}</p>
                  </>
                ) : (
                  <></>
                )}
              </span>
            </div>

            {user && user._id === elem.user._id && (
              <button
                className="post__button post__button--delete"
                onClick={() => deletePost(elem._id, user.token)}
              >
                Delete
              </button>
            )}

            <p className="post__views-count">{elem.viewsCount}</p>
          </div>
        </div>
        <DetailPost open={open} handleClose={handleClose} elem={elem} />
      </div>
    </div>
  );
};

export default Post;
