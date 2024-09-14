import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavTabs from "./NavTabs";
import { setSelectedTab } from "@hooks/useNavTabs";

const mockedUseTabNavs = jest.fn();

jest.mock("@hooks/useNavTabs", () => ({
  useNavTabs: () => mockedUseTabNavs(),
  setSelectedTab: jest.fn(),
}));

describe("NavTabs Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render all tabs", () => {
    render(<NavTabs />);

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Upcoming")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  it("should apply the active class to the selected tab", () => {
    mockedUseTabNavs.mockReturnValue("upcoming");

    render(<NavTabs />);

    const allButton = screen.getByText("All");
    const upcomingButton = screen.getByText("Upcoming");
    const completedButton = screen.getByText("Completed");

    expect(allButton).not.toHaveClass("active");
    expect(upcomingButton).toHaveClass("active");
    expect(completedButton).not.toHaveClass("active");
  });

  it("should call setSelectedTab with the correct tab when a tab is clicked", () => {
    mockedUseTabNavs.mockReturnValue("all");

    render(<NavTabs />);

    const upcomingButton = screen.getByText("Upcoming");

    fireEvent.click(upcomingButton);

    expect(setSelectedTab).toHaveBeenCalledWith("upcoming");
  });
});
