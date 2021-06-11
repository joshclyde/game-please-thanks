import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

import { firestore } from "../_root";

const getUserDocRef = (uid: string) => doc(firestore, `/users/${uid}`);

/*
  Gets the user's data.
  If there is not data yet, create the user's data with default values.
*/
export const getProfileData = async (uid: string) => {
  const snapshot = await getDoc(getUserDocRef(uid));
  const defaultData = { hasGamePass: false, name: `` };
  if (snapshot.exists()) {
    const data = snapshot.data() as { hasGamePass?: boolean; name?: string };
    return { ...defaultData, ...data };
  } else {
    await setDoc(getUserDocRef(uid), defaultData);
    return defaultData;
  }
};

export const updateProfileData = async ({
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
