let clients = [];
let tasksAutomated = 0;
let wallet = 0;

function addClient() {
  const newClient = { id: clients.length + 1, name: `Client ${clients.length + 1}` };
  clients.push(newClient);
  updateDashboard();
}

function runAutomation() {
  tasksAutomated += Math.floor(Math.random() * 10) + 1;
  updateDashboard();
}

function addFunds() {
  wallet += 100;
  document.getElementById("walletBalance").textContent = `$${wallet}`;
}

function updateDashboard() {
  document.getElementById("clientCount").textContent = `Clients: ${clients.length}`;
  document.getElementById("taskCount").textContent = `Tasks Automated: ${tasksAutomated}`;
}
