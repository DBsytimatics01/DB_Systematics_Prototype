import React from "react";
import ClientCard from "../components/ClientCard.jsx";
import Top20List from "../components/Top20List.jsx";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClientCard name="Example Client" profit="$4,200" />
        <Top20List />
      </div>
    </div>
  );
}
