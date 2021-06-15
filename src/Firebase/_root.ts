import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "./firebaseConfig";

/*
  Documentation

  API Docs: https://firebase.google.com/docs/reference/js
  Firestore API Docs: https://firebase.google.com/docs/reference/js/firebase.firestore

  User Authentication: https://firebase.google.com/docs/auth/web/firebaseui
  Cloud Firestore Security Rules: https://firebase.google.com/docs/firestore/security/overview
  Creating References to Collections/Documents: https://firebase.google.com/docs/firestore/data-model#references
  Real-time Updates to Firestore: https://cloud.google.com/firestore/docs/query-data/listen

  Firebase.Firestore API: https://firebase.google.com/docs/reference/js/firebase.firestore
  Determing how long a user stays signed in: https://firebase.google.com/docs/auth/web/auth-state-persistence

  TODO Modular firebase SDK: https://firebase.google.com/docs/web/learn-more?authuser=0#modular-version


  Security Rules
  Tutorial: https://firebase.google.com/docs/firestore/security/get-started?authuser=0
  Rules Docs: https://firebase.google.com/docs/reference/rules/rules?authuser=0
  Auth data Docs: https://firebase.google.com/docs/reference/rules/rules.firestore.Request?authuser=0#auth
  Unit Test Security Rules: https://firebase.google.com/docs/firestore/security/test-rules-emulator?authuser=0
*/

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore();
