import { atom, useSetAtom } from "jotai";

import { startFirebaseEventListening } from "@Firebase";

export const currentUserIdStatusAtom = atom<null | "PENDING" | "COMPLETE">(null);
export const currentUserIdAtom = atom<string | null>(null);

let isFirst = true;
export const useListenForAuth = () => {
  const setId = useSetAtom(currentUserIdAtom);
  const setStatus = useSetAtom(currentUserIdStatusAtom);
  if (isFirst) {
    isFirst = false;
    setStatus(`PENDING`);
    startFirebaseEventListening(
      async ({ uid }) => {
        setStatus(`COMPLETE`);
        setId(uid);
      },
      () => {
        setStatus(`COMPLETE`);
        setId(null);
      },
    );
  }
};
