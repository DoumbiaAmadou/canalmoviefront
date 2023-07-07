import React, { FC, useEffect, useCallback } from "react";
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
} from "rxjs";

interface SearchProps {
  handleSearch: (val: string) => void;
}

let souscription: Subscription | null = null;
const Subject$ = new Subject();
const Search: FC<SearchProps> = ({ handleSearch }) => {
  useEffect(() => {
    if (!souscription) {
      souscription = Subject$.pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe((val: unknown) => {
        if (typeof val === "string" && handleSearch) {
          handleSearch(val);
        }
      });
    }
    return () => {
      if (souscription) {
        souscription.unsubscribe();
        souscription = null;
      }
    };
  }, [handleSearch]);

  const onSearchHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const value = e.target.value;
      Subject$.next(value);
    },
    []
  );

  return (
    <div data-testid="Search">
      <input
        type="text"
        className=""
        name="search"
        role="search"
        placeholder="Search"
        onChange={onSearchHandle}
      />
    </div>
  );
};

export default Search;
