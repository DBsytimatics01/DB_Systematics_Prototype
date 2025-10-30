import React from "react";
import BrainCanvas from "../components/BrainCanvas.jsx";

export default function DemoPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">AI Tool Demo</h2>
      <BrainCanvas />
    </div>
  );
}
