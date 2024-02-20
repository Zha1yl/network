import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";
import React from "react";
import CloseFriend from "../closeFriend/CloseFriend";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sideBar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText" onClick={() => navigate("/")}>
              Новости
            </span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span
              className="sidebarListItemText"
              onClick={() => navigate("/message")}
            >
              Чат
            </span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span
              className="sidebarListItemText"
              onClick={() => navigate("/video")}
            >
              Видео
            </span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span
              className="sidebarListItemText"
              onClick={() => navigate("/market")}
            >
              Маркет
            </span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span
              className="sidebarListItemText"
              onClick={() => navigate("/favourites")}
            >
              Избранное
            </span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span
              className="sidebarListItemText"
              onClick={() => navigate("/music")}
            >
              Музыка
            </span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span
              className="sidebarListItemText"
              onClick={() => navigate("/friends")}
            >
              Друзья
            </span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        {/* <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default SideBar;
