import React from "react";

export default function ToolPalette({ tools, onSelect }) {
  return (
    <div className="tool-palette">
      <h2>Tool Palette</h2>
      <div className="tool-grid">
        {tools.map((tool) => (
          <button key={tool.id} onClick={() => onSelect(tool)}>
            {tool.name}
          </button>
        ))}
      </div>
    </div>
  );
}
