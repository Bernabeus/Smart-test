var admin = require("firebase-admin");

var serviceAccount = require("./firebase-keys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-smart-4a805-default-rtdb.firebaseio.com"
})

export const firestore = admin.firestore()