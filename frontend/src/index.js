import React from "react";
import ReactDOM from "react-dom/client";
/*
commenting default bootstrap and index.css
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
*/

import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
