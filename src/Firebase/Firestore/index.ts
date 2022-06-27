import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  collection,
  where,
  documentId,
} from "firebase/firestore";
import isPlainObject from "lodash/isPlainObject";

import {
  UserProfile,
  UserProfileFriends,
  UserProfileGames,
  PartialUserProfileGames,
} from "@Types";
import { appendKeysWithPrefix } from "@Utils";

import { firestore } from "../_root";

const getUserDocRef = (uid: string) => doc(firestore, `/users/${uid}`);

/*
  Gets the user's data.
  If there is not data yet, create the user's data with default values.
*/
export const getProfileData = async (
  uid: string,
): Promise<{
  hasGamePass: boolean;
  name: string;
  games: UserProfileGames;
  friends: UserProfileFriends;
}> => {
  const snapshot = await getDoc(getUserDocRef(uid));
  const defaultData = { hasGamePass: false, name: ``, games: {}, friends: {} };
  if (snapshot.exists()) {
    const data = snapshot.data() as {
      hasGamePass?: boolean;
      name?: string;
      games?: UserProfileGames;
      friends?: UserProfileFriends;
    };
    return { ...defaultData, ...data };
  } else {
    await setDoc(getUserDocRef(uid), defaultData);
    return defaultData;
  }
};

export const getUsers = async (uids: Array<string>) => {
  const q = query(collection(firestore, `/users`), where(documentId(), `in`, uids));
  const snapshot = await getDocs(q);
  const users: Record<string, UserProfile> = {};
  snapshot.forEach((doc) => {
    users[doc.id] = doc.data() as UserProfile;
  });
  return users;
};

export const getAllUsers = async () => {
  const q = query(collection(firestore, `/users`));
  const snapshot = await getDocs(q);
  const users: Record<string, UserProfile> = {};
  snapshot.forEach((doc) => {
    users[doc.id] = doc.data() as UserProfile;
  });
  return users;
};

// https://firebase.google.com/docs/firestore/manage-data/add-data#update_fields_in_nested_objects
export const updateUserData = async ({
  uid,
  hasGamePass,
  name,
}: {
  uid: string;
  hasGamePass: boolean;
  name: string;
}) => {
  try {
    await updateDoc(getUserDocRef(uid), {
      hasGamePass,
      name,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/*
  If I have a nested object, then using this dot notation I can set values within the
  nested object without changing other values inside the nested object.

  For example, say I have a firestore document of
  {
    name: 'Josh',
    favorites: {
      food: 'Pizza',
      color: 'Blue',
      subject: 'Recess',
    }
  }

  If I want to change my favorite color from Blue to Red, I must call updateDoc with the following
  so that food and subject are not overriden.
  {
    "favorites.color": 'Blue'
  }

  https://firebase.google.com/docs/firestore/manage-data/add-data#update_fields_in_nested_objects
*/
export const convertToDotNotation = (data: Record<string, any>): Record<string, any> => {
  const keys = Object.keys(data);
  return keys.reduce<Record<string, any>>((accumulated, key) => {
    let values: Record<string, any> = {};
    const value = data[key];
    if (isPlainObject(value)) {
      const dot = convertToDotNotation(value);
      values = appendKeysWithPrefix(`${key}.`, dot);
    } else {
      values = { [key]: value };
    }
    return { ...accumulated, ...values };
  }, {});
};

export const updateProfileGames = async ({
  uid,
  games,
}: {
  uid: string;
  /*
    Intentionally asking for partial so that you can change just one attribute
    of game data
  */
  games: PartialUserProfileGames;
}) => {
  try {
    const data = convertToDotNotation({ games });
    await updateDoc(getUserDocRef(uid), data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateProfileFriends = async ({
  uid,
  friends,
}: {
  uid: string;
  friends: UserProfileFriends;
}) => {
  try {
    const data = convertToDotNotation({ friends });
    await updateDoc(getUserDocRef(uid), data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
