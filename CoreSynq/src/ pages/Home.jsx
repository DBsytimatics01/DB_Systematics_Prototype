import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to CoreSynq</h1>
      <p>The system that powers your future.</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
