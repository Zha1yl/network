import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, API } from "../../helpers/const";

const postContext = createContext();
export const usePost = () => useContext(postContext);
const INIT_STATE = {
  posts: [],
  onePost: {},
};
const PostContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_POSTS:
        return { ...state, posts: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // Create
  const addPost = async (newPost) => {
    await axios.post(API, newPost);
    navigate("/posts");
  };
  // Get
  const getPosts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_POSTS,
      payload: data,
    });
  };
  //Delete
  const deletePost = async (id) => {
    await axios.delete(`${API}/${id}`);
    getPosts();
  };
  // GET_ONE_MOVIE
  const getOnePost = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_POST,
      payload: data,
    });
  };
  // Edit
  const editPost = async (id, editedPost) => {
    await axios.patch(`${API}/${id}`, editedPost);
    navigate("/posts");
  };
  const values = {
    addPost,
    getPosts,
    posts: state.posts,
    deletePost,
    getOnePost,
    oneMovie: state.onePost,
    editPost,
  };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

export default PostContextProvider;
