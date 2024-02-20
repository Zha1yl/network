import React from "react";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import AuthPage from "../pages/AuthPage";
import EditPage from "../pages/EditPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import MusicPage from "../pages/MusicPage";
import VideoPage from "../pages/VideoPage";
import MarketPage from "../pages/MarketPage";
import MessagePage from "../pages/MessagePage";
import FriendsPage from "../pages/FriendsPage";
import Favourites from "../pages/Favourites";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "*", element: <NotFoundPage /> },
    { id: 3, link: "/products", element: <ProductPage /> },
    { id: 4, link: "/cart", element: <CartPage /> },
    { id: 5, link: "/auth", element: <AuthPage /> },
    { id: 6, link: "/edit/:id", element: <EditPage /> },
    { id: 7, link: "/music", element: <MusicPage /> },
    { id: 8, link: "/video", element: <VideoPage /> },
    { id: 9, link: "/market", element: <MarketPage /> },
    { id: 10, link: "/message", element: <MessagePage /> },
    { id: 11, link: "/friends", element: <FriendsPage /> },
    { id: 12, link: "/favourites", element: <Favourites /> },
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
