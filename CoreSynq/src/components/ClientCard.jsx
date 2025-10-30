import React from "react";

export default function ClientCard({ name, profit }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-green-400 mt-2">Profit: {profit}</p>
    </div>
  );
}
