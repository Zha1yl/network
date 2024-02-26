import {
  PauseCircleOutline,
  PlayCircleOutline,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./musicPlayer.css";

const MusicPlayer = () => {
  const tracks = [
    {
      name: "Track 1",
      url: require("../../components/music/tracks/track1.mp3"),
    },
    {
      name: "Track 2",
      url: require("../../components/music/tracks/track2.mp3"),
    },
    {
      name: "Track 3",
      url: require("../../components/music/tracks/track3.mp3"),
    },
    {
      name: "Track 4",
      url: require("../../components/music/tracks/track4.mp3"),
    },
    {
      name: "Track 5",
      url: require("../../components/music/tracks/track5.mp3"),
    },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [audio] = useState(new Audio(tracks[currentTrackIndex].url));
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextTrack = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
  };

  const playPreviousTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else {
      setCurrentTrackIndex(tracks.length - 1);
    }
  };

  useEffect(() => {
    audio.src = tracks[currentTrackIndex].url;
    audio.addEventListener("ended", playNextTrack);
    return () => {
      audio.removeEventListener("ended", playNextTrack);
    };
  }, [currentTrackIndex]);

  return (
    <div className="music-player">
      <h2 className="player-title">Music Player</h2>
      <div className="track-info">
        <h3 className="track-name">
          Now Playing: {tracks[currentTrackIndex].name}
        </h3>
      </div>
      <div className="controls">
        <button className="control-button" onClick={playPreviousTrack}>
          <SkipPrevious />
        </button>
        <button className="control-button" onClick={togglePlay}>
          {isPlaying ? <PauseCircleOutline /> : <PlayCircleOutline />}
        </button>
        <button className="control-button" onClick={playNextTrack}>
          <SkipNext />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
