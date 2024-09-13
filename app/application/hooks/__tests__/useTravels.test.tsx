import { renderHook, act } from "@testing-library/react";
import {
  useTravels,
  setTravels,
  setLoading,
  addTravel,
  editTravel,
  deleteTravel,
  changeTravelStatus,
} from "@hooks/useTravels";
import { Travel, TravelStatus } from "@types";
import { mockTravels } from "@domain/mockData";
import { fetchTravels } from "@api";

jest.mock("@api");

describe("useTravels store", () => {
  it("should initialize with the correct default state", () => {
    const { result } = renderHook(() => useTravels());

    expect(result.current.travels).toEqual([]);
    expect(result.current.loading).toBe(true);
  });

  it("should fetch and update travels with fetchTravels on the first time", async () => {
    (fetchTravels as jest.Mock).mockResolvedValue(mockTravels);
    const { result } = renderHook(() => useTravels());

    await act(async () => {
      await result.current.fetchData();
    });

    expect(fetchTravels as jest.Mock).toHaveBeenCalledTimes(1);
    expect(result.current.travels).toEqual(mockTravels);
  });

  it("should not call fetchTravels when travels are already stored", async () => {
    const { result } = renderHook(() => useTravels());

    act(() => {
      setTravels(mockTravels);
    });

    await act(async () => {
      await result.current.fetchData();
    });

    expect(fetchTravels as jest.Mock).toHaveBeenCalledTimes(0);
  });

  it("should update travels with setTravels", () => {
    const { result } = renderHook(() => useTravels());

    act(() => {
      setTravels(mockTravels);
    });

    expect(result.current.travels).toEqual(mockTravels);
  });

  it("should update loading state with setLoading", () => {
    const { result } = renderHook(() => useTravels());

    act(() => {
      setLoading(false);
    });

    expect(result.current.loading).toBe(false);
  });

  it("should add a travel with addTravel", () => {
    const { result } = renderHook(() => useTravels());
    const newTravel: Travel = {
      id: 4,
      title: "New Destination",
      description: "Description of new destination",
      photo_url: "http://example.com/newdestination.jpg",
      status: "todo" as TravelStatus,
      itinerary: [
        {
          day: 1,
          location: "New Location",
          description: "New location description",
        },
      ],
    };

    act(() => {
      setTravels(mockTravels);
      addTravel(newTravel);
    });

    expect(result.current.travels).toHaveLength(4);
    expect(result.current.travels[3]).toEqual({ ...newTravel, id: 4 });
  });

  it("should edit a travel with editTravel", () => {
    const { result } = renderHook(() => useTravels());
    const updatedTravel: Travel = {
      ...mockTravels[0],
      title: "Updated Portugal",
    };

    act(() => {
      setTravels(mockTravels);
      editTravel(updatedTravel);
    });

    expect(result.current.travels[0].title).toBe("Updated Portugal");
  });

  it("should delete a travel with deleteTravel", () => {
    const { result } = renderHook(() => useTravels());

    act(() => {
      setTravels(mockTravels);
      deleteTravel(mockTravels[0].id);
    });

    expect(result.current.travels).toHaveLength(2);
  });

  it("should change status of a travel with changeTravelStatus", () => {
    const { result } = renderHook(() => useTravels());
    const travelId = mockTravels[0].id;

    act(() => {
      setTravels(mockTravels);
      changeTravelStatus(travelId, "done");
    });

    expect(result.current.travels[0].status).toBe("done");
  });
});
