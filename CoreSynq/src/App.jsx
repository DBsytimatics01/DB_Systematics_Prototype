import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import DemoPage from "./pages/DemoPage.jsx";
import SOPPage from "./pages/SOPPage.jsx";
import WalletPage from "./pages/WalletPage.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/sop" element={<SOPPage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </BrowserRouter>
  );
}
