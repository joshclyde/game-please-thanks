import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import _ from "lodash";

import { appendKeysWithPrefix } from "@Utils";

import { firestore } from "../_root";

const getUserDocRef = (uid: string) => doc(firestore, `/users/${uid}`);

/*
  Gets the user's data.
  If there is not data yet, create the user's data with default values.
*/
export const getProfileData = async (uid: string) => {
  const snapshot = await getDoc(getUserDocRef(uid));
  const defaultData = { hasGamePass: false, name: ``, games: {} };
  if (snapshot.exists()) {
    const data = snapshot.data() as {
      hasGamePass?: boolean;
      name?: string;
      games?: Record<string, { isOwned: boolean }>;
    };
    return { ...defaultData, ...data };
  } else {
    await setDoc(getUserDocRef(uid), defaultData);
    return defaultData;
  }
};

// https://firebase.google.com/docs/firestore/manage-data/add-data#update_fields_in_nested_objects
export const updateProfileData = async ({
  uid,
  hasGamePass,
  name,
  games,
}: {
  uid: string;
  hasGamePass: boolean;
  name: string;
  games?: Record<string, { isOwned: boolean }>;
}) => {
  try {
    await updateDoc(getUserDocRef(uid), {
      hasGamePass,
      name,
      games,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const convertToDotNotation = (data: Record<string, any>): Record<string, any> => {
  const keys = Object.keys(data);
  return keys.reduce<Record<string, any>>((accumulated, key) => {
    let values: Record<string, any> = {};
    const value = data[key];
    if (_.isPlainObject(value)) {
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
  games: Record<string, { isOwned: boolean }>;
}) => {
  try {
    const data = convertToDotNotation({ games });
    await updateDoc(getUserDocRef(uid), data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
