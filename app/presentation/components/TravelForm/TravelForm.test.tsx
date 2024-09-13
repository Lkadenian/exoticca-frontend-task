import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TravelForm } from "@components";
import { closeDialog } from "@hooks/useDialog";
import { getTravelById } from "@hooks/useTravels";
import { mockTravels } from "@domain/mockData";
import { emptyItinerary } from "../../utils/emptyEntities";

jest.mock("@hooks/useDialog", () => ({
  closeDialog: jest.fn(),
}));

jest.mock("@hooks/useTravels", () => ({
  getTravelById: jest.fn(),
}));

describe("TravelForm Component", () => {
  const mockTravel = mockTravels[0];

  const mockAction = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render with correct heading and inputs", () => {
    render(<TravelForm headingText="Create a Trip" action={mockAction} />);

    expect(screen.getByText("Create a Trip")).toBeInTheDocument();
    expect(screen.getByLabelText("Travel Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
  });

  it("should handle input changes correctly", () => {
    render(<TravelForm headingText="Create a Trip" action={mockAction} />);

    fireEvent.change(screen.getByLabelText("Travel Name"), {
      target: { value: "New Travel" },
    });
    fireEvent.change(
      screen.getByLabelText("Introduction (max. 240 characters)"),
      { target: { value: "New Introduction" } }
    );
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "New Description" },
    });
    fireEvent.change(screen.getByLabelText("Image"), {
      target: { value: "https://example.com/newphoto.jpg" },
    });

    expect(screen.getByLabelText("Travel Name")).toHaveValue("New Travel");
    expect(
      screen.getByLabelText("Introduction (max. 240 characters)")
    ).toHaveValue("New Introduction");
    expect(screen.getByLabelText("Description")).toHaveValue("New Description");
    expect(screen.getByLabelText("Image")).toHaveValue(
      "https://example.com/newphoto.jpg"
    );
  });

  it("should display error message when required fields are empty", () => {
    render(<TravelForm headingText="Create a Trip" action={mockAction} />);

    fireEvent.click(screen.getByText("Save"));

    expect(
      screen.getByText("Title, description and image are required")
    ).toBeInTheDocument();
  });

  it("should call action and close dialog on valid save", () => {
    render(<TravelForm headingText="Create a Trip" action={mockAction} />);

    fireEvent.change(screen.getByLabelText("Travel Name"), {
      target: { value: "Valid Travel" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "Valid Description" },
    });
    fireEvent.change(screen.getByLabelText("Image"), {
      target: { value: "https://example.com/validphoto.jpg" },
    });

    fireEvent.click(screen.getByText("Save"));

    expect(mockAction).toHaveBeenCalledWith({
      id: 1,
      title: "Valid Travel",
      description: "Valid Description",
      introduction: "",
      photo_url: "https://example.com/validphoto.jpg",
      status: "todo",
      itinerary: [emptyItinerary],
    });
    expect(closeDialog).toHaveBeenCalled();
  });

  it("should preload travel data when travelId is provided", () => {
    (getTravelById as jest.Mock).mockReturnValue(mockTravel);

    render(
      <TravelForm headingText="Edit Travel" action={mockAction} travelId={1} />
    );
    expect(screen.getByLabelText("Travel Name")).toHaveValue(mockTravel.title);
    expect(screen.getByLabelText("Description")).toHaveValue(
      mockTravel.description
    );
    expect(screen.getByLabelText("Image")).toHaveValue(mockTravel.photo_url);
  });
});
