import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchPage from "./SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("it should mount SearchPage Correctly", () => {
  jest.setTimeout(10000);
  test("it should mount SearchPage with Welcome message", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/:params?" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    );
    const searchPage = screen.getByText("Movie search Engine.");
    const asc = screen.getByText("ASC");
    expect(searchPage).toBeInTheDocument();
    expect(asc).toBeInTheDocument();
  });
});
