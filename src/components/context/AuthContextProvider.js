import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import {
  ACTIONS,
  API_AUTH_GET_USERS,
  API_AUTH_LOGIN,
  API_AUTH_REGISTER,
} from "../../helpers/const";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const INIT_STATE = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const AuthContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.UPDATE_USER:
        return { ...state, user: action.payload };
      case ACTIONS.UPDATE_USERS:
        return { ...state, users: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function loginUser(obj) {
    try {
      const { data } = await axios.post(API_AUTH_LOGIN, obj);
      dispatch({ type: ACTIONS.UPDATE_USER, payload: data });
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  async function registerUser(obj) {
    try {
      const { data } = await axios.post(API_AUTH_REGISTER, obj);
      dispatch({ type: ACTIONS.UPDATE_USER, payload: data });
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.error("Error registering:", error);
    }
  }

  async function logoutUser() {
    localStorage.removeItem("user");
    dispatch({ type: ACTIONS.UPDATE_USER, payload: null });
  }

  async function getAllUsers() {
    const { data } = await axios.get(API_AUTH_GET_USERS);
    localStorage.setItem("users", JSON.stringify(data));
    dispatch({ type: ACTIONS.UPDATE_USERS, payload: data });
  }

  const values = {
    loginUser,
    registerUser,
    logoutUser,
    user: state.user,
    getAllUsers,
    users: state.users,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
