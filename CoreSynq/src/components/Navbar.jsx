import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4 bg-gray-800 shadow-md">
      <h1 className="font-bold text-xl text-blue-400">CoreSynq</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/sop">SOP</Link>
        <Link to="/wallet">Wallet</Link>
      </div>
    </nav>
  );
}
