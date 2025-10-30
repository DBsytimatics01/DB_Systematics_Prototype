import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/sop">SOP</Link>
        <Link to="/wallet">Wallet</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
