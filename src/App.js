import React from "react";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import MainRoutes from "./pages/routes/MainRoutes";

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
