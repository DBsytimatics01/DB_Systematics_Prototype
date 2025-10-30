import React, { useState, useEffect } from "react";
import ClientCard from "../components/ClientCard";
import Top20List from "../components/Top20List";

export default function DashboardPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("/api/clients")
      .then((res) => res.json())
      .then(setClients)
      .catch(console.error);
  }, []);

  return (
    <div className="dashboard-page">
      <h1>CoreSynq Dashboard</h1>
      <Top20List items={clients} />
      <div className="client-grid">
        {clients.map((c) => (
          <ClientCard key={c.id} client={c} />
        ))}
      </div>
    </div>
  );
}
