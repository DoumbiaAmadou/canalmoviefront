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
          console.log("debouce", val, " with type ", typeof val);
          if (typeof val === "string") handleCall(val);
        }
      });
      console.log("Monted");
    }
    return () => {
      console.log("UnMonted");
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
      console.log("Next", value);
      Subject$.next(value);
    },
    [Subject$]
  );

  return [handleNext];
};
