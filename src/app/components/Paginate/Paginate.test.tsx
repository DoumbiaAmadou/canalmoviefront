import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Paginate from "./Paginate";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<Paginate />", () => {
  test("it should correctly paginate in [1 to 2 ] \n\
  (1)prev()= 1 \n\
  (1)next()=2 \n\
  (2)next()=2  \n\
  (1)prev()=1 \n\
  ", () => {
    const mock = jest.fn((val: number) => {
      render(<Paginate total={2} currentChange={mock} />);
      fireEvent.click(screen.getByText("<< Prev "));
      fireEvent.click(screen.getByText("Next >>"));
      fireEvent.click(screen.getByText("Next >>"));
      fireEvent.click(screen.getByRole("<< Prev "));
      expect(mock.mock.calls[0][0]).toBe(1);
      expect(mock.mock.calls[1][0]).toBe(2);
      expect(mock.mock.calls[2][0]).toBe(2);
      expect(mock.mock.calls[3][0]).toBe(1);
    });
  });
});
