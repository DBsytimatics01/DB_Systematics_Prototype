import React from "react";
import ToolPalette from "../components/ToolPalette";

export default function DemoPage() {
  const tools = [
    { id: 1, name: "AI Chat" },
    { id: 2, name: "Marketing Bot" },
    { id: 3, name: "Auto Client Builder" },
  ];

  return (
    <div className="demo-page">
      <h1>CoreSynq Demo</h1>
      <ToolPalette tools={tools} onSelect={(t) => alert(`Selected ${t.name}`)} />
    </div>
  );
}
