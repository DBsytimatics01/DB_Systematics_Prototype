// === Day 7: Client Management System ===

let clients = [
  { id: 'c1', name: 'Acme', desc: 'Automates marketing', profit: 0 },
  { id: 'c2', name: 'BetaCo', desc: 'Streamlines sales', profit: 0 }
];

localStorage.setItem('clients', JSON.stringify(clients));

const clientSection = document.getElementById('clients');
if (clientSection) {
  clients.forEach(client => {
    if (!document.querySelector(`.client[data-id="${client.id}"]`)) {
      const div = document.createElement('div');
      div.className = 'client';
      div.dataset.id = client.id;
      div.innerHTML = `
        <img src="assets/logos/${client.id}.png" alt="${client.name} logo">
        <h3>${client.name}</h3>
        <p class="desc">${client.desc}</p>
        <p class="profit">$${client.profit} this quarter</p>
      `;
      clientSection.appendChild(div);
    }
  });
}
