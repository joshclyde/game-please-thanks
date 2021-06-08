/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

/*
  This hook will call the callback once when the component mounts.
  Nice for when I want to ignore the exhaustive-deps rule.
*/
export const useOnce = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
