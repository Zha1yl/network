import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import React from "react";
import "./navbar.css";
import person1 from "../../assets/person/1.jpeg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo" onClick={() => navigate(`/`)}>
          Вконтакте
        </span>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input type="Найти друзей, посты или видео" className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Главная</span>
          <span className="navbarLink">TimeLine</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Chat />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <Notifications />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <img src={person1} alt="" className="navbarImg" />
      </div>
    </div>
  );
};

export default Navbar;
