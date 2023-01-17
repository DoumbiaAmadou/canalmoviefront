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
          <kbd className="warning" onClick={() => sort(true)}>
            ASC
          </kbd>{" "}
          &nbsp; &nbsp; &nbsp;
          <kbd className="warning" onClick={() => sort(false)}>
            DESC
          </kbd>{" "}
          <br />
          <br />
          <br />
          Catalogue :{" "}
          <kbd className="warning" onClick={() => setCatalogue(TV)}>
            TV
          </kbd>
          &nbsp; &nbsp; &nbsp;
          <kbd className="warning" onClick={() => setCatalogue(MOVIE)}>
            MOVIE
          </kbd>
        </p>
      )}
    </>
  );
};

export default Sort;
