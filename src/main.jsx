import React from "react";
import ReactDOM from "react-dom/client";  // Note the change
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));  // This is the new way in React 18+
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
