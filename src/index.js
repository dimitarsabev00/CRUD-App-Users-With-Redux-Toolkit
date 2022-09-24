import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);
