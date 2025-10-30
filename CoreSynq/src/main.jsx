import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DashboardPage from "./pages/DashboardPage";
import DemoPage from "./pages/DemoPage";
import Home from "./pages/Home";
import SOPPage from "./pages/SOPPage";
import WalletPage from "./pages/WalletPage";
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="demo" element={<DemoPage />} />
        <Route path="sop" element={<SOPPage />} />
        <Route path="wallet" element={<WalletPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
