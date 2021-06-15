import { useEffect, useState, useCallback } from "react";

/*
This hook will call the callback once when the component mounts.
Nice for when I want to ignore the exhaustive-deps rule.
*/
export const useOnce = (callback: () => void) => {
  useEffect(() => {
    callback();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
};

export const useUnmountEffect = (callback: () => void) => {
  useEffect(() => {
    return () => callback();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
};

/*
  Return's the callback function passed in but wrapped in a setTimeout.
  After calling the return value, the callback function will execute after
  ${delay} ms.
  If the return value is called again before the past call's delay has completed,
  then the past call will be cancelled.
*/
export const useTimeout = <T extends Array<any>>(
  callback: (...args: T) => void,
  delay: number = 1000,
) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
  return useCallback(
    (...args: T) => {
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
      setTimeoutId(setTimeout(() => callback(...args), delay));
    },
    [callback, timeoutId, delay],
  );
};
