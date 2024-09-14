import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TravelDetail from "./TravelDetail";
import { getTravelById, changeTravelStatus } from "@hooks/useTravels";
import { mockTravels } from "@domain/mockData";

jest.mock("@hooks/useTravels", () => ({
  useTravels: jest.fn(),
  getTravelById: jest.fn(),
  changeTravelStatus: jest.fn(),
}));

jest.mock("@assets/CheckBlank", () => ({
  __esModule: true,
  default: () => <div>CheckBlank</div>,
}));
jest.mock("@assets/CheckGreen", () => ({
  __esModule: true,
  default: () => <div>CheckGreen</div>,
}));

describe("TravelDetail Component", () => {
  const mockTravel = mockTravels[0];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should display travel details correctly", () => {
    (getTravelById as jest.Mock).mockReturnValue(mockTravel);

    render(<TravelDetail travelId={1} />);

    expect(screen.getByText(mockTravel.title)).toBeInTheDocument();
    expect(screen.getByText(mockTravel.description)).toBeInTheDocument();
    expect(screen.getByText("Day 1: Lisbon")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Explore the Alfama neighborhood and visit São Jorge Castle."
      )
    ).toBeInTheDocument();
  });

  it("should display 'Mark as completed' button if travel status is 'todo'", () => {
    (getTravelById as jest.Mock).mockReturnValue(mockTravel);

    render(<TravelDetail travelId={1} />);

    expect(screen.getByText("Mark as completed")).toBeInTheDocument();
    expect(screen.queryByText("Completed")).not.toBeInTheDocument();
  });

  it("should display 'Completed' button if travel status is 'done'", () => {
    (getTravelById as jest.Mock).mockReturnValue({
      ...mockTravel,
      status: "done",
    });

    render(<TravelDetail travelId={1} />);

    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.queryByText("Mark as completed")).not.toBeInTheDocument();
  });

  it("should call changeTravelStatus when 'Mark as completed' button is clicked", async () => {
    (getTravelById as jest.Mock).mockReturnValue(mockTravel);

    render(<TravelDetail travelId={1} />);

    fireEvent.click(screen.getByText("Mark as completed"));

    expect(changeTravelStatus).toHaveBeenCalledWith(mockTravel.id, "done");
  });

  it("should call changeTravelStatus when 'Completed' button is clicked", () => {
    (getTravelById as jest.Mock).mockReturnValue({
      ...mockTravel,
      status: "done",
    });

    render(<TravelDetail travelId={1} />);

    fireEvent.click(screen.getByText("Completed"));

    expect(changeTravelStatus).toHaveBeenCalledWith(mockTravel.id, "todo");
  });

  it("should not render anything if travel is not found", () => {
    (getTravelById as jest.Mock).mockReturnValue(null);

    const { container } = render(<TravelDetail travelId={1} />);

    expect(container).toBeEmptyDOMElement();
  });
});
