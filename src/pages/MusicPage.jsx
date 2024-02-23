import React from "react";
import MusicPlayer from "../components/music/MusicPlayer";
import AddTrackForm from "../components/music/AddTrackForm";

const MusicPage = () => {
  return (
    <div style={{ marginLeft: "400px" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Музыка</h1>
      <MusicPlayer />
      <AddTrackForm />
    </div>
  );
};

export default MusicPage;
