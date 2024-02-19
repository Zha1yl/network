import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
