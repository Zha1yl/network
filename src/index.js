import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/context/AuthContextProvider";
import ProductContextProvider from "./components/context/ProductContextProvider";
import CartContextProvider from "./components/context/CartContextProvider";
import PostContextProvider from "./components/context/PostContextProvider";
import { MusicContextProvider } from "./components/music/context/MusicContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <PostContextProvider>
          <CartContextProvider>
            <MusicContextProvider>
              <App />
            </MusicContextProvider>
          </CartContextProvider>
        </PostContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
