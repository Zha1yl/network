import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (!email || !password) {
      return;
    }

    let obj = {
      email: email,
      password: password,
    };
    loginUser(obj);
    navigate("/");
  };
  return (
    <div className="auth__page">
      <div className="auth__container">
        <div className="auth__top">
          <div className="auth__logo">
            <img
              className="auth__pic"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png"
              alt="#"
            />
          </div>
          <div className="title">
            <h2>Вход Вконтакте</h2>
          </div>
        </div>
        <div className="auth__block">
          <input
            className="auth__input"
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="auth__input"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} className="auth__btn">
            Вход
          </button>
        </div>
        <div className="auth__bottom">
          <p className="auth__text">
            Вы все еще не зарегисрированы?
            <Link className="auth__link" to={"/register"}>
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
