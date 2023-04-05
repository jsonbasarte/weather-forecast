import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainAppRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainAppRoutes />
    </Provider>
  </React.StrictMode>
);
