import React from "react";
<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
=======
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
>>>>>>> c94ef5cbe0dd7e21fae81d1ff7216aeaa810bb09
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
