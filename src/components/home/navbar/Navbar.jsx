import { Search } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import notAva from "../../assets/person/not_have_avatar_page.jpg";
import vk_logo from "../../assets/post/logo_vk.svg";

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
  const [search, setSearch] = useState("");

  return (
    <div className="navbarContainer">
      <div className="wrapper">
        <div className="navbarLeft">
          <span className="logo" onClick={() => navigate(`/`)}>
            <img src={vk_logo} alt="" className="vk__logo" />
            ВКОНТАКТЕ
          </span>
        </div>
        <div className="navbarCenter">
          <div className="searchBar">
            <Search className="searchIcon" />
            <input
              type="text"
              placeholder="Поиск"
              className="searchInput"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarIcons">Иконки</div>
          <div className="navbar__modal" ref={modalRef}>
            {user && user.avatarUrl ? (
              <div className="modal__pic_c">
                <img
                  src={user.avatarUrl}
                  alt=""
                  onClick={openModal}
                  className="modal__pic"
                />
              </div>
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
                        Logout
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
    </div>
  );
};

export default Navbar;
