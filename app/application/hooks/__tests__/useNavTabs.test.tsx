import { renderHook, act } from "@testing-library/react";
import { useNavTabs, setSelectedTab } from "@hooks/useNavTabs";
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
      setSelectedTab(newSelectedTab);
    });

    expect(result.current.selectedTab).toBe(newSelectedTab);
  });
});
