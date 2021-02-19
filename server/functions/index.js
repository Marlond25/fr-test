const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getItems = functions.https.onRequest(
  (req, res) => {
    cors(req, res, () => {
      admin
        .firestore()
        .collection('items')
        .get()
        .then(
          (data) => {
            let items = [];
            data.forEach(
              (doc) => {
                items.push(doc.data());          
              });
            return res.json(items);
          })
          .catch(
            (error) => {
              return console.error(error)
            }
          );
    })
  });


