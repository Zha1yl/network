import React, { useState } from "react";
import "./auth.css";
import { useAuth } from "../context/AuthContextProvider";
import { Link } from "react-router-dom";

const Registration = () => {
  const { registerUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (!email || !password || !fullName || !avatarUrl) {
      setError("All fields are required");
      return;
    }

    // Простая проверка длины пароля
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    let obj = {
      email: email,
      password: password,
      fullName: fullName,
      avatarUrl: avatarUrl,
    };
    registerUser(obj);
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
            <h2>Registration</h2>
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
          <input
            className="auth__input"
            placeholder="fullname"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="auth__input"
            placeholder="image URL"
            type="url"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
          {error && <p className="auth__error">{error}</p>}
          <button onClick={handleClick} className="auth__btn">
            Register
          </button>
        </div>
        <div className="auth__bottom">
          <p className="auth__text">
            Already have an account?{" "}
            <Link className="auth__link" to={"/login"}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
