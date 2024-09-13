import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { openCreateTravelDialog } from "@hooks/useDialog";

jest.mock("@assets/Logo", () => ({
  __esModule: true,
  default: () => <div>Logo</div>,
}));

jest.mock("@hooks/useDialog", () => ({
  openCreateTravelDialog: jest.fn(),
}));

describe("Header Component", () => {
  it("should render the Logo component", () => {
    render(<Header />);
    expect(screen.getByText("Logo")).toBeInTheDocument();
  });

  it("should render the Button component with correct text", () => {
    render(<Header />);
    expect(screen.getByText("Create new trip")).toBeInTheDocument();
  });

  it("should call openCreateTravelDialog when the button is clicked", () => {
    render(<Header />);
    const button = screen.getByText("Create new trip");
    fireEvent.click(button);
    expect(openCreateTravelDialog).toHaveBeenCalled();
  });
});
