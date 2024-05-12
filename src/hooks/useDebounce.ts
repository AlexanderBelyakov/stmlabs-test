import { useRef, useCallback } from "react";

const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  interval: number = 0
) => {
  const previousCall = useRef<NodeJS.Timeout | null>(null);

  return useCallback( // когда приходит новый callback сбрасываем таймер в prevTimeoutIdRef.current
    (...args: Parameters<T>) => {
      if (previousCall.current) {
        clearTimeout(previousCall.current);
      }
      previousCall.current = setTimeout(() => {
        if (previousCall.current) {
          clearTimeout(previousCall.current);
        }
        callback(...args);
      }, interval);
    },
    [callback, interval]
  );
};

export default useDebounce;
