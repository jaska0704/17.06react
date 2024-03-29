import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { clients } from "./config/query-client.js";
import { Provider } from "react";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={clients}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
