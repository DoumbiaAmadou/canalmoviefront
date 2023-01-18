import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DetailPage from "./DetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("<DetailPage />", () => {
  test("it should mount DeatailPage", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/:params?" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );
    const searchPage = screen.getByTestId("DetailPage");
    expect(searchPage).toBeInTheDocument();
  });
});
