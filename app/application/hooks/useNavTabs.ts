import { create } from "zustand";
import { TabNavs } from "@types";

type TabNavsStore = {
  selectedTab: TabNavs;
};

const initialState: TabNavsStore = {
  selectedTab: "all",
};

export const useNavTabs = create<TabNavsStore>(() => initialState);

export const setSelectedTab = (newSelectedTab: TabNavs) =>
  useNavTabs.setState({ selectedTab: newSelectedTab });
