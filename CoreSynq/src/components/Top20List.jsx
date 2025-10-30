import React from "react";

export default function Top20List() {
  const list = Array.from({ length: 5 }, (_, i) => ({
    name: `Client ${i + 1}`,
    revenue: `$${(Math.random() * 5000).toFixed(0)}`
  }));

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold mb-3">Top 20 Clients</h3>
      <ul>
        {list.map((c, i) => (
          <li key={i} className="flex justify-between py-1">
            <span>{c.name}</span>
            <span className="text-green-400">{c.revenue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
