import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../utils/ProtectedRoute";
import LandingPage from "../pages/landing/LandingPage";
import Home from "../pages/home/Home";
import Weather from "../pages/weather/Weather";
import App from "../App";

const AUTH0_DOMAIN = import.meta.env.VITE_APP_AUTH0_DOMAIN;

const AUTH0_CLIENT_ID = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

const MainAppRoutes = () => {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<LandingPage />}></Route>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/weather"
              element={
                <ProtectedRoute>
                  <Weather />
                </ProtectedRoute>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
};

export default MainAppRoutes;
