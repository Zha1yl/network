import {
  Bookmark,
  HelpOutline,
  MusicNote,
  PlayCircleFilledOutlined,
  RssFeed,
  Shop2,
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
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span
              className="sidebarListItemText"
              onClick={() => navigate("/video")}
            >
              Видео
            </span>
          </li>
          <li className="sidebarListItem">
            <Shop2 className="sidebarIcon" />
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
              onClick={() => navigate("/likes")}
            >
              Лайки
            </span>
          </li>
          <li className="sidebarListItem">
            <MusicNote className="sidebarIcon" />
            <span
              className="sidebarListItemText"
              onClick={() => navigate("/music")}
            >
              Музыка
            </span>
          </li>
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
};

export default SideBar;
