import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { API_MUSIC } from "../../helpers/const";

// Создаем контекст музыки
const MusicContext = createContext();

// Создаем хук для использования контекста музыки в других компонентах
export const useMusic = () => useContext(MusicContext);

// Инициализируем начальное состояние
const initialState = {
  tracks: JSON.parse(localStorage.getItem("tracks")) || [],
};

// Создаем редюсер для обработки действий
const musicReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRACK":
      const newTracks = [...state.tracks, action.payload];
      return {
        ...state,
        tracks: newTracks,
      };
    default:
      return state;
  }
};

// Создаем компонент-провайдер для обертывания приложения
export const MusicContextProvider = ({ children }) => {
  // Используем useReducer для управления состоянием
  const [state, dispatch] = useReducer(musicReducer, initialState);

  // Функция для добавления нового трека
  const addTrack = async (trackUrl) => {
    try {
      // Отправляем запрос на сервер для добавления трека
      const response = await axios.post(API_MUSIC, { url: trackUrl });
      // Получаем новый трек из ответа сервера
      const newTrack = response.data;
      // Диспатчим действие для добавления трека
      dispatch({ type: "ADD_TRACK", payload: newTrack });
      localStorage.setItem("tracks", JSON.stringify(trackUrl));
      // Возвращаем добавленный трек для дальнейшего использования (опционально)
      return newTrack;
    } catch (error) {
      // В случае ошибки выводим сообщение в консоль и возвращаем null
      console.error("Error adding track:", error);
      return null;
    }
  };

  // Возвращаем провайдер контекста с текущими треками и функцией добавления трека
  return (
    <MusicContext.Provider value={{ tracks: state.tracks, addTrack }}>
      {children}
    </MusicContext.Provider>
  );
};
