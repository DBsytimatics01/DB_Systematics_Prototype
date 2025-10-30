import React from "react";

export default function ClientCard({ client }) {
  return (
    <div className="client-card">
      <h3>{client.name}</h3>
      <p>Email: {client.email}</p>
      <p>Projects: {client.projects}</p>
      <p>Revenue: ${client.revenue?.toLocaleString()}</p>
    </div>
  );
}
