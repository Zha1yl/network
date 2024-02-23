import React from "react";
import MusicPlayer from "../components/music/MusicPlayer";
import AddTrackForm from "../components/music/AddTrackForm";
import "./musicPage.css";

const MusicPage = () => {
  return (
    <div
      style={{
        width: "900px",
        height: "80vh",
        marginLeft: "120px",
        marginTop: "20px",
      }}
      className="music-page"
    >
      <h1 style={{ display: "flex", justifyContent: "center" }}>Музыка</h1>
      <MusicPlayer />
      <AddTrackForm />
    </div>
  );
};

export default MusicPage;
