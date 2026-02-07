import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./router.jsx";
import "./index.css";

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);