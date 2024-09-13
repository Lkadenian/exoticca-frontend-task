import { renderHook, act } from "@testing-library/react";
import { useNavTabs, setSearchQuery } from "@hooks/useNavTabs";
import { TabNavs } from "@types";

describe("useNavTabs store", () => {
  it("should initialize with the correct default state", () => {
    const { result } = renderHook(() => useNavTabs());

    expect(result.current.selectedTab).toBe("all");
  });

  it("should update the selected tab", () => {
    const { result } = renderHook(() => useNavTabs());
    const newSelectedTab: TabNavs = "upcoming";

    act(() => {
      setSearchQuery(newSelectedTab);
    });

    expect(result.current.selectedTab).toBe(newSelectedTab);
  });
});
