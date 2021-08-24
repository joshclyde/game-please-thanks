import { useEffect, useState, useCallback, EffectCallback, DependencyList } from "react";
import { useLocation } from "react-router-dom";
import { useUpdateEffect as useUpdateEffectLib } from "react-use";

// I just want a function ignore exhaustive-deps lint rule
export const useEffectAnyDependencies = useEffect;

export const useEffectExceptFirstMount = useUpdateEffectLib;

/*
  This hook will call the callback once when the component mounts.
*/
export const useOnce = (callback: () => void) => {
  useEffectAnyDependencies(() => {
    callback();
  }, []);
};

/*
  This hook will call the callback once when the component unmounts.
*/
export const useUnmountEffect = (callback: () => void) => {
  useEffectAnyDependencies(() => {
    return () => callback();
  }, []);
};

/*
  Return's the callback function passed in but wrapped in a setTimeout.
  After calling the return value, the callback function will execute after
  ${delay} ms.
  If the return value is called again before the past call's delay has completed,
  then the past call will be cancelled.

  Should I think of a different name for this since it cancels the previous timeout?
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

/*
  `useTimer` allows you to start timer and get notified when the time is finished.
  returns 2 values
  1st: `completed`: this number will increment each time a timer has completed. a good
  use of this would be to have a useEffect with `completed` as it's dependency to
  run code each time the timer completed.
  2nd: `start`: starts a timer. if `start` is called again before the previous timer has
  completed then the second timer is canceled.
*/
export const useTimer = (ms: number = 1000) => {
  const [completed, setCompleted] = useState(0);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
  const start = useCallback(() => {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(
      setTimeout(() => {
        setCompleted((prevState) => prevState + 1);
      }, ms),
    );
  }, [ms, timeoutId]);

  return [completed, start] as const;
};

export const useQueryParamString = (queryParamKey: string) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const param = params.get(queryParamKey);
  if (param != null) {
    return param;
  }
  return undefined;
};

export const useQueryParamNumber = (queryParamKey: string) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const param = params.get(queryParamKey);
  if (param != null && param.length > 0) {
    return Number(param);
  }
  return undefined;
};

export const useUrl = () => {
  const { pathname, search, hash } = useLocation();
  return `${pathname}${search}${hash}`;
};

/*
  Will return the existing page's url
  but with the query params changed based off of `newParams`.
*/
export const useUrlWithNewParams = (
  newParams: Record<string, string | number | boolean>,
) => {
  const { pathname, search, hash } = useLocation();
  const params = new URLSearchParams(search);
  Object.entries(newParams).forEach(([newParamKey, newParamValue]) =>
    params.set(newParamKey, String(newParamValue)),
  );
  return `${pathname}${search}${hash}`;
};
