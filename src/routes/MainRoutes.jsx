import React from "react";
import CartPage from "../pages/CartPage";
import EditPage from "../pages/EditPage";
import ProductPage from "../pages/ProductPage";
import MarketPage from "../pages/MarketPage";
import { Route, Routes } from "react-router-dom";
import PostPage from "../pages/PostPage";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../components/auth/Login";
import Favourites from "../pages/Favourites";
import Registration from "../components/auth/Registration";
import Home from "../pages/home/Home";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <Home /> },
    { id: 2, link: "*", element: <NotFoundPage /> },
    { id: 3, link: "/products", element: <ProductPage /> },
    { id: 4, link: "/cart", element: <CartPage /> },
    { id: 5, link: "/login", element: <Login /> },
    { id: 6, link: "/edit/:id", element: <EditPage /> },
    { id: 7, link: "/market", element: <MarketPage /> },
    { id: 8, link: "/posts", element: <PostPage /> },
    { id: 9, link: "/register", element: <Registration /> },
    { id: 10, link: "/favorites", element: <Favourites /> },
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
