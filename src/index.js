import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./Page/Home";
import reportWebVitals from "./reportWebVitals";
import { geolocation } from "./utils/geolocation";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

geolocation();
reportWebVitals();
