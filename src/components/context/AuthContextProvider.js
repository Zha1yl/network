import axios from "axios";
import React, { createContext, useContext } from "react";
import { API_AUTH_LOGIN, API_AUTH_REGISTER } from "../../helpers/const";

const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  // ! login
  async function fetchUserData(obj) {
    const { data } = await axios.post(`${API_AUTH_LOGIN}`, obj);
    console.log(data);
    window.localStorage.setItem("token", data.token);
  }
  // ! register
  async function registerUser(obj) {
    const { data } = await axios.post(`${API_AUTH_REGISTER}`, obj);
    console.log(data);
    window.localStorage.setItem("token", data.token);
  }
  const values = {
    fetchUserData,
    registerUser,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
