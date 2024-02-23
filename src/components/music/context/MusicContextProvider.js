// MusicContextProvider.js
import React, { createContext, useContext, useEffect, useState } from "react";

const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/songs") // Замените порт, если вы используете другой
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);

  return (
    <MusicContext.Provider value={{ songs }}>{children}</MusicContext.Provider>
  );
};

const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicContextProvider");
  }
  return context;
};

export { MusicContextProvider, useMusic };
