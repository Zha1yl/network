import React from "react";
import { useMusic } from "./context/MusicContextProvider";

const MusicPage = () => {
  const { songs } = useMusic();

  return (
    <div>
      <h1>Music Page</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <p>
              {song.title} - {song.artist}
            </p>
            <audio controls>
              <source src={song.url} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicPage;
