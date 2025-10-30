import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import stripeApp from "./stripe_webhook.js";
import apiRoutes from "./api.js";

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Mount backend routes
app.use("/api", apiRoutes);
app.use("/stripe", stripeApp);

// Root route
app.get("/", (req, res) => {
  res.send("🔥 CoreSynq backend online");
});

// Export the Express app as a Firebase Function
export const coreSynqAPI = functions.https.onRequest(app);
