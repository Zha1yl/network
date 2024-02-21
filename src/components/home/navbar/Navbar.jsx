import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import person1 from "../../assets/person/1.jpeg";
import { useNavigate, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
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
          <input
            type="text" // Правильный тип
            placeholder="Найти друзей, посты или видео" // Добавьте placeholder для подсказки
            className="searchInput"
            value={search} // Убедитесь, что значение поля связано со state
            onChange={(e) => setSearch(e.target.value)}
          />
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
