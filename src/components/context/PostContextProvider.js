import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, API, API_POSTS } from "../../helpers/const";

const postContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [likedPosts, setLikedPosts] = useState([]);

  const addLikedPost = (postId) => {
    setLikedPosts((prevLikedPosts) => [...prevLikedPosts, postId]);
  };

  const removeLikedPost = (postId) => {
    setLikedPosts((prevLikedPosts) =>
      prevLikedPosts.filter((id) => id !== postId)
    );
  };

  const navigate = useNavigate();

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.GET_POSTS:
        return { ...state, posts: action.payload };
      case ACTIONS.GET_ONE_POST:
        return { ...state, onePost: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    onePost: {},
  });

  // Create
  const addPost = async (newPost, token) => {
    await axios.post(API_POSTS, newPost, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  // Get
  const getPosts = async () => {
    try {
      const { data } = await axios(`${API_POSTS}${window.location.search}`);
      dispatch({
        type: ACTIONS.GET_POSTS,
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Delete
  const deletePost = async (id, token) => {
    try {
      await axios.delete(`${API_POSTS}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // GET_ONE_MOVIE
  const getOnePost = async (id) => {
    try {
      const { data } = await axios(`${API_POSTS}/${id}`);
      dispatch({
        type: ACTIONS.GET_ONE_POST,
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching one post:", error);
    }
  };

  // Edit
  const editPost = async (id, editedPost) => {
    try {
      await axios.patch(`${API_POSTS}/${id}`, editedPost);
      navigate("/posts");
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  const values = {
    addPost,
    getPosts,
    posts: state.posts,
    deletePost,
    getOnePost,
    onePost: state.onePost,
    editPost,
    likedPosts,
    addLikedPost,
    removeLikedPost,
  };

  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

export const usePost = () => {
  const context = useContext(postContext);
  if (!context) {
    throw new Error("usePost must be used within a PostContextProvider");
  }
  return context;
};

export default PostContextProvider;
