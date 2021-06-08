import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut as authSignOut,
} from "firebase/auth";

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
*/

import { firebaseConfig } from "../firebaseConfig";

// Initialize Cloud Firestore through Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const signInUserThroughGoogle = async () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);

  try {
    const result = await getRedirectResult(auth);
    if (result) {
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
    await authSignOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = () => auth.currentUser;
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

  This is the magic way for us to know whether or not the user is signed in.
  Before the callback is called we should assume that authentication is still loading.
  On the first callback call is when authentication has finished loading and we know
  whether the user is authenticated or not.
*/
export const startFirebaseEventListening = (
  onAuthStateSignedIn: () => void,
  onAuthStateSignedOut: () => void,
) => {
  return new Promise<void>((resolve) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        onAuthStateSignedIn();
      } else {
        onAuthStateSignedOut();
      }
      resolve();
    });
  });
};
