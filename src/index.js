import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/context/AuthContextProvider";
import ProductContextProvider from "./components/context/ProductContextProvider";
import CartContextProvider from "./components/context/CartContextProvider";
import PostContextProvider from "./components/context/PostContextProvider";
import { MusicContextProvider } from "./components/context/MusicContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <PostContextProvider>
          <MusicContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </MusicContextProvider>
        </PostContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
