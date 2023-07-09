import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import List from "./List";
import { ResultType } from "../../services/FilmService";

const DATA: ResultType[] = [
  {
    backdrop_path: "",
    first_air_date: "",
    genre_ids: [],
    id: 0,
    name: "TestName",
    origin_country: [],
    original_language: "",
    original_name: "",
    overview: "TestDescription",
    popularity: 1,
    poster_path: "",
    vote_average: 1,
    vote_count: 1,
    media_type: "TV",
  },
];
const mockClick = jest.fn((val: any) => {});

describe("List", () => {
  test("Empty message, should Mount", () => {
    render(<List click={mockClick} />);

    const list = screen.getByTestId("Test-Empty");
    expect(list).toBeInTheDocument();
  });
  test("It should mount correctly One Elrmrnt", () => {
    render(<List contents={DATA} click={mockClick} />);
    const nbChild = React.Children.count(screen.getByTestId("Test-List"));
    expect(nbChild).toBe(1);
  });
});
