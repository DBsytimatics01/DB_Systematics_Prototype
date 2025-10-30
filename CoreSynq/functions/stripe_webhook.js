// functions/stripe_webhook.js (pseudocode)
const functions = require('firebase-functions');
const stripe = require('stripe')(functions.config().stripe.secret);
const admin = require('firebase-admin');

exports.stripeWebhook = functions.https.onRequest(async (req,res)=>{
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, functions.config().stripe.endpoint_secret);
  } catch(e) { return res.status(400).send(`Webhook Error: ${e.message}`); }
  if(event.type === 'checkout.session.completed'){
    const session = event.data.object;
    const walletId = session.metadata.walletId;
    // create transaction doc in Firestore (pending) and then mark completed after settlement logic
    await admin.firestore().collection('transactions').add({
      walletId, amount: session.amount_total, status: 'completed', source: 'stripe', createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
  }
  res.json({received:true});
});
