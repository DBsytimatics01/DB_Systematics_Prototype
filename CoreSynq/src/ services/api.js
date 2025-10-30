export async function fetchClients() {
  const response = await fetch("/api/clients");
  if (!response.ok) throw new Error("Failed to fetch clients");
  return response.json();
}

export async function fetchTopTools() {
  const response = await fetch("/api/tools/top");
  if (!response.ok) throw new Error("Failed to fetch top tools");
  return response.json();
}
