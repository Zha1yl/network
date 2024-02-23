import React from "react";
import CartPage from "../pages/CartPage";
import EditPage from "../pages/EditPage";
import ProductPage from "../pages/ProductPage";
import MarketPage from "../pages/MarketPage";
import { Route, Routes } from "react-router-dom";
import PostPage from "../pages/PostPage";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import Home from "../pages/home/Home";
import MusicPage from "../pages/MusicPage";
import FavoritesPage from "../pages/FavoritesPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <Home /> },
    { id: 2, link: "*", element: <NotFoundPage /> },
    { id: 3, link: "/products", element: <ProductPage /> },
    { id: 4, link: "/cart", element: <CartPage /> },
    { id: 5, link: "/login", element: <Login /> },
    { id: 6, link: "/edit/:id", element: <EditPage /> },
    { id: 7, link: "/register", element: <Registration /> },
    { id: 8, link: "/music", element: <MusicPage /> },
    { id: 9, link: "/market", element: <MarketPage /> },
    { id: 10, link: "/posts", element: <PostPage /> },
    { id: 11, link: "/register", element: <Registration /> },
    { id: 12, link: "/favorites", element: <FavoritesPage /> },
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
