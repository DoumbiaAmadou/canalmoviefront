import React, { useCallback, useEffect, useMemo } from "react";
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
} from "rxjs";

let souscription: Subscription | null = null;

export const useDebounce = (
  handleCall: (value: string) => void,
  delay: number = 500
) => {
  const Subject$ = useMemo(() => new Subject(), []);

  useEffect(() => {
    if (!souscription) {
      souscription = Subject$.pipe(
        debounceTime(delay),
        distinctUntilChanged()
      ).subscribe((val: unknown) => {
        if (handleCall) {
          if (typeof val === "string") handleCall(val);
        }
      });
    }
    return () => {
      if (souscription) {
        souscription.unsubscribe();
        souscription = null;
      }
    };
  }, [Subject$, handleCall, delay]);

  const handleNext = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const value = e.target.value;
      Subject$.next(value);
    },
    [Subject$]
  );

  return [handleNext];
};
