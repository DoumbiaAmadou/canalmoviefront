import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "./Search";

describe("<Search />", () => {
  beforeEach(() => {
    jest.setTimeout(4000);
  });
  jest.setTimeout(10000);
  test("it should handle Debounce 400 onClik", async () => {
    const mock = jest.fn((val: string) => {});
    render(<Search handleSearch={mock} />);
    let input = screen.getByRole("search");

    fireEvent.change(input, { target: { value: "a" } });
    await new Promise((r) => setTimeout(r, 20));
    fireEvent.change(input, { target: { value: "abc" } });
    await new Promise((r) => setTimeout(r, 20));
    fireEvent.change(input, { target: { value: "ab" } });
    await new Promise((r) => setTimeout(r, 600));
    expect(mock.mock.calls.length).toBe(1);
    expect(mock.mock.calls[0][0]).toBe("ab");
  });

  test("it should call 2 times", async () => {
    const mock = jest.fn((val: string) => {});
    render(<Search handleSearch={mock} />);
    let input = screen.getByRole("search");

    fireEvent.change(input, { target: { value: "a" } });
    await new Promise((r) => setTimeout(r, 300));
    fireEvent.change(input, { target: { value: "abc" } });
    await new Promise((r) => setTimeout(r, 510));
    fireEvent.change(input, { target: { value: "aab" } });
    await new Promise((r) => setTimeout(r, 600));

    expect(mock.mock.calls[0][0]).toBe("abc");
    expect(mock.mock.calls[1][0]).toBe("aab");
    expect(mock.mock.calls.length).toBe(2);
  });
});
