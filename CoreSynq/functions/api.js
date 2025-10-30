import express from "express";
const router = express.Router();

// Example: fetch all clients
router.get("/clients", async (req, res) => {
  const clients = [
    { name: "Acme Corp", upgradeLevel: "Platinum" },
    { name: "NeuraTech", upgradeLevel: "Gold" },
  ];
  res.json(clients);
});

// Example: fetch top tools
router.get("/tools/top", (req, res) => {
  const tools = [
    { name: "Neural Hub", usage: "AI integration core" },
    { name: "AutoTask", usage: "Workflow automation" },
  ];
  res.json(tools);
});

// Example: standard operating procedure
router.get("/sops", (req, res) => {
  const sops = [
    { name: "Client Upgrade Flow", version: "v2.3" },
    { name: "AI Deployment Rules", version: "v1.5" },
  ];
  res.json(sops);
});

export default router;
