import { renderHook, act } from "@testing-library/react";
import { useSearch, setSearchQuery } from "@hooks/useSearch";

describe("useSearch store", () => {
  it("should initialize with an empty search query", () => {
    const { result } = renderHook(() => useSearch());

    expect(result.current.searchQuery).toBe("");
  });

  it("should update the search query when setSearchQuery is called", () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      setSearchQuery("New query");
    });

    expect(result.current.searchQuery).toBe("New query");
  });
});
