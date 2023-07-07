import React, { FC } from "react";

interface SortProps {
  query: string;
  sort: (_: boolean) => void;
  setCatalogue: (_: string) => void;
}

const TV: string = "tv";
const MOVIE: string = "movie";

const Sort: FC<SortProps> = ({ query, sort, setCatalogue }) => {
  return (
    <>
      {query === "" && (
        <p>
          Sort By Popularity: &nbsp;
          <kbd className="warning" role="button" onClick={() => sort(true)}>
            ASC
          </kbd>{" "}
          &nbsp; &nbsp; &nbsp;
          <kbd className="warning" role="button" onClick={() => sort(false)}>
            DESC
          </kbd>{" "}
          <br />
          <br />
          Catalogue : &nbsp;
          <kbd
            className="warning"
            role="button"
            onClick={() => setCatalogue(TV)}
          >
            TV
          </kbd>
          &nbsp; &nbsp; &nbsp;
          <kbd
            className="warning"
            role="button"
            onClick={() => setCatalogue(MOVIE)}
          >
            MOVIE
          </kbd>
        </p>
      )}
    </>
  );
};

export default Sort;
