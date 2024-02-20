import React from "react";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import EditPage from "../pages/EditPage";
import AdminPage from "../pages/AdminPage";
import { Route, Routes } from "react-router-dom";
import PostPage from "../pages/PostPage";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";

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
