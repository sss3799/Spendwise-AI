import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProcessProvider } from "./context/ProcessContext";

ReactDOM.render(
  <React.StrictMode>
    <ProcessProvider>
      <App />
    </ProcessProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
