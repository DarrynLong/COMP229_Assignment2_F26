/*
    Author: Darryn Long
    Date: 09/27/2026
    Main Entry Point
*/

// Importing React and ReactDOM for rendering the application
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);