import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./context/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkModeContextProvider } from "./context/DarkModeContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <Context>
        <App />
      </Context>
    </DarkModeContextProvider>
  </React.StrictMode>
);
