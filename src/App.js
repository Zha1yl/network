import React from "react";
import Navbar from "./components/home/navbar/Navbar";
import SideBar from "./components/home/sidebar/SideBar";
import MainRoutes from "./routes/MainRoutes";
import "../src/index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
