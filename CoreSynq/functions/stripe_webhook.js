import Stripe from "stripe";
import express from "express";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();

app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle events (like successful payments)
  if (event.type === "payment_intent.succeeded") {
    const payment = event.data.object;
    console.log("Payment succeeded:", payment.id);
  }

  res.send();
});

export default app;
