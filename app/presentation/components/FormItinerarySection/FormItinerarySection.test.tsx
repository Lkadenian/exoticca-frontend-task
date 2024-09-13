import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormItinerarySection from "./FormItinerarySection";
import { Itinerary } from "@types";

describe("FormItinerarySection Component", () => {
  it("should render the add button and the itinerary list", () => {
    const itinerary: Itinerary[] = [];
    const setItinerary = jest.fn();

    render(
      <FormItinerarySection itinerary={itinerary} setItinerary={setItinerary} />
    );

    expect(screen.getByLabelText("add itinerary slot")).toBeInTheDocument();
    expect(screen.getByText("Day by day itinerary")).toBeInTheDocument();
  });

  it("should add a new itinerary slot when the add button is clicked", () => {
    const itinerary: Itinerary[] = [];
    const setItinerary = jest.fn();

    render(
      <FormItinerarySection itinerary={itinerary} setItinerary={setItinerary} />
    );

    fireEvent.click(screen.getByLabelText("add itinerary slot"));

    expect(setItinerary).toHaveBeenCalledTimes(1);
  });

  it("should update the day in the itinerary slot", () => {
    const itinerary: Itinerary[] = [{ day: 1, location: "", description: "" }];
    const setItinerary = jest.fn();

    render(
      <FormItinerarySection itinerary={itinerary} setItinerary={setItinerary} />
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "2" } });

    expect(setItinerary).toHaveBeenCalledWith([
      { day: 2, location: "", description: "" },
    ]);
  });

  it("should update the location in the itinerary slot", () => {
    const itinerary: Itinerary[] = [{ day: 1, location: "", description: "" }];
    const setItinerary = jest.fn();

    render(
      <FormItinerarySection itinerary={itinerary} setItinerary={setItinerary} />
    );

    const input = screen.getByPlaceholderText("Location");
    fireEvent.change(input, { target: { value: "New Location" } });

    expect(setItinerary).toHaveBeenCalledWith([
      { day: 1, location: "New Location", description: "" },
    ]);
  });

  it("should update the description in the itinerary slot", () => {
    const itinerary: Itinerary[] = [{ day: 1, location: "", description: "" }];
    const setItinerary = jest.fn();

    render(
      <FormItinerarySection itinerary={itinerary} setItinerary={setItinerary} />
    );

    const textarea = screen.getByPlaceholderText("Description");
    fireEvent.change(textarea, { target: { value: "New Description" } });

    expect(setItinerary).toHaveBeenCalledWith([
      { day: 1, location: "", description: "New Description" },
    ]);
  });
});
