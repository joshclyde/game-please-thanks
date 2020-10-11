import { ScheduleEvent } from "@DomainData";
import { initializeApp, firestore, auth } from "firebase";

/*
  Documentation

  User Authentication: https://firebase.google.com/docs/auth/web/firebaseui
  Cloud Firestore Security Rules: https://firebase.google.com/docs/firestore/security/overview
  Creating References to Collections/Documents: https://firebase.google.com/docs/firestore/data-model#references
  Real-time Updates to Firestore: https://cloud.google.com/firestore/docs/query-data/listen

  Firebase.Firestore API: https://firebase.google.com/docs/reference/js/firebase.firestore
  Determing how long a user stays signed in: https://firebase.google.com/docs/auth/web/auth-state-persistence
*/

import { firebaseConfig } from "./firebaseConfig";

// Initialize Cloud Firestore through Firebase
initializeApp(firebaseConfig);

const db = firestore();

export const getSchedule = async () => {
  const querySnapshot = await db.collection(`schedule`).get();
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
  // console.log(querySnapshot);
};

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
    var user = result.user;
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  }
};

export const signOutUser = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
};

const getCurrentUser = () => auth().currentUser;
const getCurrentUserUID = () => getCurrentUser()?.uid;
export const getIsUserSignedIn = () => Boolean(getCurrentUser());
export const consoleLogCurrentUser = () => console.log(getCurrentUser().uid);

export const addScheduleEvent = async (scheduleEvent: ScheduleEvent) => {
  const uid = getCurrentUserUID();
  if (uid != null && uid.length > 0) {
    const docRef = await db.collection(`userData/${uid}/schedule`).add(scheduleEvent);
    return { id: docRef.id };
  } else {
    throw new Error(`UID was either nully or had a length of zero!`);
  }
};

export const fetchUserDataSchedule = async (): Promise<Record<string, ScheduleEvent>> => {
  const uid = getCurrentUserUID();
  if (uid != null && uid.length > 0) {
    const querySnapshot = await db.collection(`userData/${uid}/schedule`).get();
    const scheduleData: Record<string, ScheduleEvent> = {};
    querySnapshot.forEach((doc) => {
      const { title, description, startDatetime, endDatetime } = doc.data();

      console.log(`Start Datetime `, startDatetime);
      scheduleData[doc.id] = {
        title,
        description,
        startDatetime: new firestore.Timestamp(
          startDatetime.seconds,
          startDatetime.nanoseconds,
        ).toDate(),
        endDatetime: new firestore.Timestamp(
          endDatetime.seconds,
          endDatetime.nanoseconds,
        ).toDate(),
      };
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
    return scheduleData;
  } else {
    console.log(`OH NO ERROR`);
    throw new Error(`UID was either nully or had a length of zero!`);
  }
};

/*
  Firebase Documentation

  Get the currently signed-in user: https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
*/
let isUserSignedIn = false;
export const startFirebaseEventListening = (
  onAuthStateSignedIn: () => void,
  onAuthStateSignedOut: () => void,
) => {
  auth().onAuthStateChanged((user) => {
    if (user) {
      isUserSignedIn = true;
      onAuthStateSignedIn();
    } else {
      isUserSignedIn = false;
      onAuthStateSignedOut();
    }
  });
};
