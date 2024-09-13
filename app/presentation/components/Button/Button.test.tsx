import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@components";

describe("Button Component", () => {
  it("should render children correctly", () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should apply default variant and size classes when not provided", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByText("Click me");

    expect(button).toHaveClass("button");
    expect(button).toHaveClass("black");
    expect(button).toHaveClass("normal");
  });

  it("should apply the correct variant class", () => {
    render(<Button variant="white">Click me</Button>);

    const button = screen.getByText("Click me");

    expect(button).toHaveClass("white");
    expect(button).not.toHaveClass("black");
  });

  it("should apply the correct size class", () => {
    render(<Button size="small">Click me</Button>);

    const button = screen.getByText("Click me");

    expect(button).toHaveClass("small");
    expect(button).not.toHaveClass("normal");
  });

  it("should handle the click event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByText("Click me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
