import React from "react";
import HomePage from "../AdminPage";
import HomePage from "../HomePage";
import NotFoundPage from "../NotFoundPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import AuthPage from "../pages/AuthPage";
import EditPage from "../pages/EditPage";
import AdminPage from "../pages/AdminPage";
import { Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "*", element: <NotFoundPage /> },
    { id: 3, link: "/products", element: <ProductPage /> },
    { id: 4, link: "/cart", element: <CartPage /> },
    { id: 5, link: "/auth", element: <AuthPage /> },
    { id: 6, link: "/edit/:id", element: <EditPage /> },
    { id: 7, link: "/admin", element: <AdminPage /> },
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
