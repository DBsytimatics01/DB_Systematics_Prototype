// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// simple HTTP function for health
exports.hello = functions.https.onRequest((req,res)=>{
  res.status(200).send("CoreSynq functions healthy");
});

// placeholder: create checkout session route will go here later (server side)
