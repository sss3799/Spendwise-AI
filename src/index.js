import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProcessProvider } from "./context/ProcessContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProcessProvider>
      <App />
    </ProcessProvider>
  </React.StrictMode>
);
