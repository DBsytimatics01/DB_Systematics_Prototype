import React, { useState } from "react";
import { sendPayment } from "../services/stripe";

export default function WalletPage() {
  const [amount, setAmount] = useState("");

  return (
    <div className="wallet-page">
      <h1>Wallet</h1>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => sendPayment(amount)}>Pay Now</button>
    </div>
  );
}
