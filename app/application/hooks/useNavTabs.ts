import { create } from "zustand";
import { TabNavs } from "@types";

type TabNavsStore = {
  selectedTab: TabNavs;
};

const initialState: TabNavsStore = {
  selectedTab: "all" as const,
};

export const useNavTabs = create<TabNavsStore>(() => initialState);

export const setSearchQuery = (newSelectedTab: TabNavs) =>
  useNavTabs.setState({ selectedTab: newSelectedTab });
