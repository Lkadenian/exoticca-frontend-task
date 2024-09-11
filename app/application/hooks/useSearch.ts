import { create } from "zustand";
import { produce } from "immer";

type ISearch = {
  searchQuery: string;
};

export const useSearch = create<ISearch>(() => {
  const initialState = {
    searchQuery: "",
  };

  return initialState;
});

export const setSearchQuery = (newSearchQuery: string) =>
  useSearch.setState(
    produce((state) => {
      state.searchQuery = newSearchQuery;
    })
  );
