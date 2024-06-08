import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Import Tailwind CSS file
import "./styles/global.css"; // Import global CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
