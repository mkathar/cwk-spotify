import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import stores from "./stores";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={stores}>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
