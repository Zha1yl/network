import React from "react";
import NotFoundPage from "../pages/NotFoundPage";
import CartPage from "../pages/CartPage";
import EditPage from "../pages/EditPage";
import AdminPage from "../pages/AdminPage";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import HomePage from "../HomePage";
import LikesPage from "../LikesPage";
import ProductPage from "../ProductPage";
import CartPage from "../CartPage";

import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "*", element: <NotFoundPage /> },
    { id: 3, link: "/products", element: <ProductPage /> },
    { id: 4, link: "/cart", element: <CartPage /> },
    { id: 5, link: "/login", element: <Login /> },
    { id: 6, link: "/edit/:id", element: <EditPage /> },
    { id: 7, link: "/admin", element: <AdminPage /> },
    { id: 8, link: "/posts", element: <PostPage /> },
    { id: 9, link: "/register", element: <Registration /> },
    { id: 11, link: "/likes", element: <LikesPage /> },
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
