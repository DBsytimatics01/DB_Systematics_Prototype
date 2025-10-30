import React from "react";

export default function ToolPalette() {
  const tools = ["AI Writer", "Data Cleaner", "Email Bot", "Logo Maker"];

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold mb-3">Tools</h3>
      <ul className="space-y-2">
        {tools.map((tool, i) => (
          <li
            key={i}
            className="bg-gray-700 px-3 py-2 rounded-lg hover:bg-gray-600 cursor-pointer"
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}
