// === DASHBOARD MAIN SCRIPT (Day 7–8 Combined) ===

// --- CLIENT SYSTEM ---
let clients = [
  { id: 'c1', name: 'Acme', desc: 'Automates marketing', profit: 0 },
  { id: 'c2', name: 'BetaCo', desc: 'Streamlines sales', profit: 0 }
];
localStorage.setItem('clients', JSON.stringify(clients));

// --- SOP (STANDARD OPERATING PROCEDURE) SYSTEM ---
let sops = [
  { title: "Caller Script", steps: ["Step1", "Step2"], status: "Draft" },
  { title: "Demo Guide", steps: ["Step1", "Step2"], status: "Draft" }
];
localStorage.setItem('sops', JSON.stringify(sops));

// --- PAYMENT SYSTEM ---
function recordPayment(clientId, amount) {
  const payments = JSON.parse(localStorage.getItem('payments') || '[]');
  payments.push({
    id: 'p' + Date.now(),
    client: clientId,
    amount,
    ts: new Date().toISOString()
  });
  localStorage.setItem('payments', JSON.stringify(payments));
}

// --- DASHBOARD INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  const clientSection = document.getElementById('clients');
  const storedClients = JSON.parse(localStorage.getItem('clients')) || [];
  const storedSops = JSON.parse(localStorage.getItem('sops')) || [];

  // Render Clients
  clientSection.innerHTML = storedClients.map(c => `
    <div class="client" data-id="${c.id}">
      <img src="assets/logos/${c.id}.png" alt="logo">
      <h3>${c.name}</h3>
      <p class="desc">${c.desc}</p>
      <p class="profit">$${c.profit} this quarter</p>
    </div>
  `).join('');

  // Log SOPs
  console.log("Loaded SOPs:", storedSops);
  console.log("Dashboard Initialized Successfully");
});
