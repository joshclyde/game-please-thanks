import { initializeApp, firestore, auth } from "firebase";

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
*/

import { firebaseConfig } from "../firebaseConfig";

// Initialize Cloud Firestore through Firebase
initializeApp(firebaseConfig);

export const db = firestore();

export const signInUserThroughGoogle = async () => {
  const provider = new auth.GoogleAuthProvider();
  auth().signInWithRedirect(provider);

  try {
    const result = await auth().getRedirectResult();
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    // var user = result.user;
  } catch (error) {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // The email of the user's account used.
    // var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
  }
};

export const signOutUser = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = () => auth().currentUser;
export const getCurrentUserUID = () => getCurrentUser()?.uid;
export const throwOrGetCurrentUserUID = () => {
  const uid = getCurrentUser()?.uid;
  if (uid != null && uid.length > 0) {
    return uid;
  } else {
    throw new Error(`UID was either nully or had a length of zero!`);
  }
};
export const getIsUserSignedIn = () => Boolean(getCurrentUser());
export const consoleLogCurrentUser = () => console.log(getCurrentUser()?.uid);

/*
  Firebase Documentation

  Get the currently signed-in user: https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
*/
export const startFirebaseEventListening = (
  onAuthStateSignedIn: () => void,
  onAuthStateSignedOut: () => void,
) => {
  auth().onAuthStateChanged((user) => {
    if (user) {
      onAuthStateSignedIn();
    } else {
      onAuthStateSignedOut();
    }
  });
};
