import { create } from "zustand";
import { produce } from "immer";
import { TabNavs } from "@types";

type INavTabs = {
  selectedTab: TabNavs;
};

export const useNavTabs = create<INavTabs>(() => {
  const initialState = {
    selectedTab: "all" as const,
  };

  return initialState;
});

export const setSearchQuery = (newSelectedTab: TabNavs) =>
  useNavTabs.setState((state) =>
    produce(state, (draftState) => {
      draftState.selectedTab = newSelectedTab;
    })
  );
