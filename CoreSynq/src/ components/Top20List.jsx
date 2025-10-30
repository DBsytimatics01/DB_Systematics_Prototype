import React from "react";

export default function Top20List({ items }) {
  return (
    <div className="top20-list">
      <h2>Top 20 Clients</h2>
      <ol>
        {items.slice(0, 20).map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> — ${item.revenue?.toLocaleString()}
          </li>
        ))}
      </ol>
    </div>
  );
}
