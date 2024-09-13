import React from "react";
import { render, screen } from "@testing-library/react";
import TravelCardList from "./TravelCardList";
import { mockTravels } from "@domain/mockData";

const mockedUseTravels = jest.fn();
const mockedUseSearch = jest.fn();
const mockedUseTabNavs = jest.fn();

jest.mock("@hooks/useTravels", () => ({
  useTravels: () => mockedUseTravels(),
}));

jest.mock("@hooks/useSearch", () => ({
  useSearch: () => mockedUseSearch(),
}));

jest.mock("@hooks/useNavTabs", () => ({
  useNavTabs: () => mockedUseTabNavs(),
}));

jest.mock("@components", () => ({
  __esModule: true,
  TravelCard: () => <div>TravelCard</div>,
}));

describe("TravelCardList Component", () => {
  const mockFetchData = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should display 'Loading...' when loading is true", () => {
    mockedUseTravels.mockReturnValue({
      fetchData: mockFetchData,
      loading: true,
      travels: [],
    });

    render(<TravelCardList />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should call fetchData on component mount", () => {
    mockedUseTravels.mockReturnValue({
      fetchData: mockFetchData,
      loading: false,
      travels: [],
    });

    render(<TravelCardList />);

    expect(mockFetchData).toHaveBeenCalledTimes(1);
  });

  it("should display 'No trips found' when no trips match the filter", () => {
    mockedUseTravels.mockReturnValue({
      fetchData: mockFetchData,
      loading: false,
      travels: [],
    });

    mockedUseSearch.mockReturnValue("nonexistent");

    mockedUseTabNavs.mockReturnValue("all");

    render(<TravelCardList />);

    expect(screen.getByText("No trips found")).toBeInTheDocument();
  });

  it("should display TravelCard components for filtered travels", async () => {
    const travels = mockTravels;

    mockedUseTravels.mockReturnValue({
      fetchData: mockFetchData,
      loading: false,
      travels,
    });

    mockedUseSearch.mockReturnValue("");

    mockedUseTabNavs.mockReturnValue("all");

    render(<TravelCardList />);

    expect(await screen.findAllByText("TravelCard")).toHaveLength(
      travels.length
    );
  });
});
