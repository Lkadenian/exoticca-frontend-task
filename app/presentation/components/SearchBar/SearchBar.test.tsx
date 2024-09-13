import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { setSearchQuery } from "@hooks/useSearch";

jest.mock("@hooks/useSearch", () => ({
  setSearchQuery: jest.fn(),
}));

describe("SearchBar Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render input and button elements", () => {
    render(<SearchBar />);

    expect(screen.getByPlaceholderText("Search trips")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("should update input value on change", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText("Search trips");

    fireEvent.change(input, { target: { value: "Japan" } });

    expect(input).toHaveValue("Japan");
  });

  it("should call setSearchQuery with the input value when the button is clicked", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText("Search trips");
    fireEvent.change(input, { target: { value: "Japan" } });

    const button = screen.getByText("Search");
    fireEvent.click(button);

    expect(setSearchQuery).toHaveBeenCalledWith("Japan");
  });

  it("should call setSearchQuery with the input value when Enter key is pressed", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText("Search trips");
    fireEvent.change(input, { target: { value: "Japan" } });

    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(setSearchQuery).toHaveBeenCalledWith("Japan");
  });
});
