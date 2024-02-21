import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../ProductPage";
import CartPage from "../CartPage";
import AuthPage from "../AuthPage";
import EditPage from "../EditPage";

import NotFoundPage from "../NotFoundPage";
import Home from "../home/Home";
import VideoPage from "../VideoPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <Home /> },
    { id: 2, link: "*", element: <NotFoundPage /> },
    { id: 3, link: "/products", element: <ProductPage /> },
    { id: 4, link: "/cart", element: <CartPage /> },
    { id: 5, link: "/auth", element: <AuthPage /> },
    { id: 6, link: "/edit/:id", element: <EditPage /> },
    { id: 7, link: "/video", element: <VideoPage /> },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route path={elem.link} key={elem.id} element={elem.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
