// === DASHBOARD MAIN SCRIPT (Days 7–10 Combined) ===
// Handles client display, SOPs, payments, and dashboard logic.

// --- CLIENT SYSTEM ---
let clients = [
  { id: 'c1', name: 'Acme', desc: 'Automates marketing', profit: 0 },
  { id: 'c2', name: 'BetaCo', desc: 'Streamlines sales', profit: 0 }
];
if (!localStorage.getItem('clients')) {
  localStorage.setItem('clients', JSON.stringify(clients));
}

// --- SOP (STANDARD OPERATING PROCEDURE) SYSTEM ---
let sops = [
  { title: "Caller Script", steps: ["Step 1", "Step 2"], status: "Draft" },
  { title: "Demo Guide", steps: ["Step 1", "Step 2"], status: "Draft" }
];
if (!localStorage.getItem('sops')) {
  localStorage.setItem('sops', JSON.stringify(sops));
}

// --- PAYMENT SYSTEM ---
function recordPayment(clientId, amount) {
  try {
    const payments = JSON.parse(localStorage.getItem('payments') || '[]');
    payments.push({
      id: 'p' + Date.now(),
      client: clientId,
      amount: parseFloat(amount),
      ts: new Date().toISOString()
    });
    localStorage.setItem('payments', JSON.stringify(payments));

    // Update client profit
    const clients = JSON.parse(localStorage.getItem('clients'));
    const client = clients.find(c => c.id === clientId);
    if (client) {
      client.profit += parseFloat(amount);
      localStorage.setItem('clients', JSON.stringify(clients));
      renderClients();
    }
  } catch (err) {
    console.error("Error recording payment:", err);
  }
}

// --- RENDER CLIENTS ---
function renderClients() {
  const clientSection = document.getElementById('clients');
  const storedClients = JSON.parse(localStorage.getItem('clients')) || [];
  if (!clientSection) return;

  clientSection.innerHTML = storedClients.map(c => `
    <div class="client" data-id="${c.id}">
      <img src="assets/logos/${c.id}.png" alt="${c.name} Logo">
      <h3>${c.name}</h3>
      <p class="desc">${c.desc}</p>
      <p class="profit">$${c.profit.toLocaleString()} this quarter</p>
      <button class="pay-btn" data-id="${c.id}">+ Payment</button>
    </div>
  `).join('');

  // Attach pay button events
  document.querySelectorAll('.pay-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const amount = prompt(`Enter payment amount for ${id}:`);
      if (amount && !isNaN(amount)) {
        recordPayment(id, amount);
        alert(`Payment of $${amount} recorded for ${id}`);
      }
    });
  });
}

// --- INITIALIZE DASHBOARD ---
document.addEventListener('DOMContentLoaded', () => {
  renderClients();
  console.log("CoreSynq Dashboard Initialized Successfully ✅");
});
