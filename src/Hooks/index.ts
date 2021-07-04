import { useEffect, useState, useCallback, EffectCallback, DependencyList } from "react";
import { useLocation } from "react-router-dom";

// I just want a function ignore exhaustive-deps lint rule
export const useEffectAnyDependencies = useEffect;

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
