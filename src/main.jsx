import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import App from "./App.jsx";
import CccProvider from "./components/CccProvider.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CccProvider>
      <Router hook={useHashLocation}>
        <App />
      </Router>
    </CccProvider>
  </StrictMode>,
);
