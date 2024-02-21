import React from "react";
import Navbar from "./components/home/navbar/Navbar";
import MainRoutes from "./pages/routes/MainRoutes";
import SideBar from "./components/home/sidebar/SideBar";
import MainRoutes from "./routes/MainRoutes";

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
