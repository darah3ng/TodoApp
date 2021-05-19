const admin = require('firebase-admin');

const serviceAccount = require("../../firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todoapp-1c316-default-rtdb.asia-southeast1.firebasedatabase.app"
});

  const db = admin.firestore();

  module.exports  = { admin, db };