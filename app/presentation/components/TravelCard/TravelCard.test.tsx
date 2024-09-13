import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TravelCard from "./TravelCard";
import { OpenEditTravelDialog, OpenShowTravelDialog } from "@hooks/useDialog";
import { deleteTravel } from "@hooks/useTravels";
import { mockTravels } from "@domain/mockData";

jest.mock("@hooks/useDialog", () => ({
  OpenEditTravelDialog: jest.fn(),
  OpenShowTravelDialog: jest.fn(),
}));

jest.mock("@hooks/useTravels", () => ({
  deleteTravel: jest.fn(),
}));

describe("TravelCard Component", () => {
  const travel = mockTravels[0];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render travel details correctly", () => {
    render(<TravelCard travel={travel} />);

    expect(screen.getByAltText(travel.title)).toHaveAttribute(
      "src",
      travel.photo_url
    );
    expect(screen.getByText(travel.title)).toBeInTheDocument();
    expect(screen.getByText(travel.description)).toBeInTheDocument();
  });

  it("should call OpenShowTravelDialog with correct id when 'See trip details' is clicked", () => {
    render(<TravelCard travel={travel} />);

    const detailsButton = screen.getByText("See trip details");
    fireEvent.click(detailsButton);

    expect(OpenShowTravelDialog).toHaveBeenCalledWith(travel.id);
  });

  it("should call OpenEditTravelDialog with correct id when 'Edit' is clicked", () => {
    render(<TravelCard travel={travel} />);

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    expect(OpenEditTravelDialog).toHaveBeenCalledWith(travel.id);
  });

  it("should call deleteTravel with correct id when 'Delete' is clicked", () => {
    render(<TravelCard travel={travel} />);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(deleteTravel).toHaveBeenCalledWith(travel.id);
  });
});
