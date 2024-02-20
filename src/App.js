import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/home/navbar/Navbar";
import SideBar from "./components/home/sidebar/SideBar";
import HomePage from "./pages/home/HomePage";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default App;
