import React, { useState } from "react";
import { useMusic } from "../context/MusicContextProvider";

const AddTrackForm = () => {
  const [trackUrl, setTrackUrl] = useState("");
  const { addTrack } = useMusic();

  const handleChange = (e) => {
    setTrackUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!trackUrl.trim()) return;
    await addTrack(trackUrl);
    setTrackUrl("");
  };

  return <></>;
};

export default AddTrackForm;
