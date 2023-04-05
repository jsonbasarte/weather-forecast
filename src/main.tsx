import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Home from "./pages/home/Home";
import { Auth0Provider } from "@auth0/auth0-react";
import ProtectedRoute from "./utils/ProtectedRoute";

const AUTH0_DOMAIN = import.meta.env.VITE_APP_AUTH0_DOMAIN;

const AUTH0_CLIENT_ID = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<LandingPage />}></Route>
            <Route path="home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>
);
