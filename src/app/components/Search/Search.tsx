import React, { FC, useEffect, useCallback } from "react";
import styles from "./Search.module.scss";
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
} from "rxjs";

interface SearchProps {
  handleSearch?: (val: string) => void;
}

let souscription: Subscription | null = null;
const Subject$ = new Subject();
const Search: FC<SearchProps> = ({ handleSearch }) => {
  // const [word, setWord] = useState<string>("");

  useEffect(() => {
    if (!souscription) {
      souscription = Subject$.pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe((val: unknown) => {
        if (typeof val === "string" && handleSearch) {
          console.log("debouce", val);
          handleSearch(val);
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
  }, []);

  const onSearchHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const value = e.target.value;
      console.log("Next", value);
      Subject$.next(value);
    },
    []
  );

  return (
    <div className={styles.Search} data-testid="Search">
      <input
        type="text"
        className=""
        name="search"
        placeholder="Search"
        onChange={onSearchHandle}
      />
    </div>
  );
};

export default Search;
