import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import notAva from "../../assets/person/not_have_avatar_page.jpg";

const Navbar = () => {
  const { logoutUser, user } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <input
            type="text"
            placeholder="Найти друзей, посты или видео"
            className="searchInput"
          />
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
        <div className="navbarIcons">{/* Иконки */}</div>
        <div className="navbar__modal" ref={modalRef}>
          {user ? (
            <>
              <img
                src={user.avatarUrl}
                alt="#"
                onClick={openModal}
                className="modal__pic"
              />
            </>
          ) : (
            <>
              <img
                src={notAva}
                alt=""
                onClick={openModal}
                className="modal__pic"
              />
            </>
          )}

          {showModal && (
            <div className="modal__item">
              {user ? (
                <>
                  <div className="modal-content">
                    <Link to="/profile" className="modal__link">
                      Profile
                    </Link>
                    <Link
                      onClick={logoutUser}
                      to="/register"
                      className="modal__link"
                    >
                      logout
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="modal-content">
                    <Link to="/login" className="modal__link">
                      Login
                    </Link>
                    <Link to="/register" className="modal__link">
                      SignIn
                    </Link>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
