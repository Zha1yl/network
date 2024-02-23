import React, { useEffect, useState } from "react";
import { Menu, Dropdown } from "antd";
import { usePost } from "../../context/PostContextProvider";
import "./post.css";
import { HeartFilled, HeartOutlined, MoreOutlined } from "@ant-design/icons";
import DetailPost from "../DetailPost";
import { useAuth } from "../../context/AuthContextProvider";
import notAva from "../../assets/person/not_have_avatar_page.jpg";

const Post = ({ elem }) => {
  const [like, setLike] = useState(elem.like);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setLike((prevLike) => prevLike + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { deletePost } = usePost();

  const { user, getAllUsers, users } = useAuth();
  useEffect(() => {
    getAllUsers();
  }, []);
  console.log(users);
  console.log(user);

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
      <Menu.Item
        key="2"
        onClick={() => user && deletePost(elem._id, user.token)}
      >
        DELETE
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="post post--clickable">
      <div className="post__wrapper">
        <div className="post__center">
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
                      width="300px"
                      height="197px"
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
              className="post__button post__button--like"
              onClick={handleLikeClick}
            >
              <span className="post__like-icon">
                {isLiked ? (
                  <HeartFilled style={{ color: "red", fontSize: "24px" }} />
                ) : (
                  <HeartOutlined style={{ fontSize: "24px" }} />
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
