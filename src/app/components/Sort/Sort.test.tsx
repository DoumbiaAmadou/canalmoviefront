import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Sort from "./Sort";

describe("<Sort />", () => {
  test("it should mount All Element", () => {
    const mockSort = jest.fn((bool: boolean) => {});
    const mockSetCatalogue = jest.fn((val: string) => {});
    render(<Sort query="" sort={mockSort} setCatalogue={mockSetCatalogue} />);
    const asc = screen.getByText("ASC");
    const desc = screen.getByText("DESC");
    const tv = screen.getByText("TV");
    const movie = screen.getByText("MOVIE");
    expect(asc).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(tv).toBeInTheDocument();
    expect(movie).toBeInTheDocument();
  });
  test("it should mount", () => {
    const mockSort = jest.fn((bool: boolean) => {});
    const mockSetCatalogue = jest.fn((val: string) => {});
    render(<Sort query="" sort={mockSort} setCatalogue={mockSetCatalogue} />);
    const asc = screen.getByText("ASC");
    const desc = screen.getByText("DESC");
    const tv = screen.getByText("TV");
    const movie = screen.getByText("MOVIE");
    fireEvent.click(asc);
    fireEvent.click(desc);
    fireEvent.click(tv);
    fireEvent.click(movie);
    expect(mockSort.mock.calls[0][0]).toBeTruthy();
    expect(mockSort.mock.calls[1][0]).toBeFalsy();
    expect(mockSetCatalogue.mock.calls[0][0]).toBe("tv");
    expect(mockSetCatalogue.mock.calls[1][0]).toBe("movie");
  });
});
