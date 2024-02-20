import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import ProductPage from "../ProductPage";
import CartPage from "../CartPage";
import AuthPage from "../AuthPage";
import EditPage from "../EditPage";
import AdminPage from "../AdminPage";
import PostPage from "../PostPage";
import NotFoundPage from "../NotFoundPage";
import LikesPage from "../LikesPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "*", element: <NotFoundPage /> },
    { id: 3, link: "/products", element: <ProductPage /> },
    { id: 4, link: "/cart", element: <CartPage /> },
    { id: 5, link: "/auth", element: <AuthPage /> },
    { id: 6, link: "/edit/:id", element: <EditPage /> },
    { id: 7, link: "/admin", element: <AdminPage /> },
    { id: 8, link: "/posts", element: <PostPage /> },
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
