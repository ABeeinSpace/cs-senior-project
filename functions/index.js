/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions/v1');
import {
	getFirestore, doc, setDoc
} from 'firebase/firestore'
// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.createNewUserDoc = functions.auth.user().onCreate((user) => {
  firestore.

  admin.firestore.CollectionReference()(doc(db, "users", authResult.user.uid), {
    hasGuessed: false,
    isStudent: false,
    guessed: 0,
    correctness: 0,
    userID: authResult.user.uid,
    gradeLevel: "test",
    correctAIGameOne: 0,
    correctHumanGameOne: 0,
    correctnessGameTwo: 0,
    guessedAIGameOne: 0,
    guessedGameTwo: 0,
    guessedHumanGameOne: 0
  }, {merge: true})
});
