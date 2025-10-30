export async function sendPayment(amount) {
  const response = await fetch("/api/payments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Payment failed");
  alert("Payment successful!");
}
