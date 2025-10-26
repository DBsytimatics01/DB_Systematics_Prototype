// === DASHBOARD MAIN SCRIPT ===
// File: /js/dashboard.js

// --- MOCK DATA (replace with backend or API later) ---
const dashboardStats = {
  totalUsers: 7850,
  totalRevenue: 92400,
  activeAutomations: 124,
  monthlyRevenue: [5000, 8000, 12000, 18000, 24000, 32000],
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
};

// --- SELECT ELEMENTS ---
const totalUsersEl = document.getElementById("totalUsers");
const totalRevenueEl = document.getElementById("totalRevenue");
const activeAutomationsEl = document.getElementById("activeAutomations");

// --- ON LOAD ---
window.addEventListener("DOMContentLoaded", () => {
  // Load stats
  totalUsersEl.textContent = dashboardStats.totalUsers.toLocaleString();
  totalRevenueEl.textContent = `$${dashboardStats.totalRevenue.toLocaleString()}`;
  activeAutomationsEl.textContent = dashboardStats.activeAutomations.toLocaleString();

  // Render Chart
  renderRevenueChart();
});

// --- CHART.JS REVENUE GRAPH ---
function renderRevenueChart() {
  const ctx = document.getElementById("revenueChart");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: dashboardStats.months,
      datasets: [{
        label: "Monthly Revenue ($)",
        data: dashboardStats.monthlyRevenue,
        borderColor: "#1abc9c",
        backgroundColor: "rgba(26, 188, 156, 0.2)",
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: { 
        legend: { display: true, position: "bottom" },
      },
      scales: {
        y: { beginAtZero: true, grid: { color: "#eee" } },
        x: { grid: { display: false } }
      }
    }
  });
}

// --- BUTTON ACTIONS ---
document.getElementById("addAutomationBtn").addEventListener("click", () => {
  alert("🚀 Add Automation feature coming soon!");
});

document.getElementById("viewClientsBtn").addEventListener("click", () => {
  window.location.href = "clients.html"; // example redirect
});

document.getElementById("reportsBtn").addEventListener("click", () => {
  window.location.href = "reports.html"; // example redirect
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "login.html";
});
