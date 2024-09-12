import { create } from "zustand";

type SearchStore = {
  searchQuery: string;
};

const initialState: SearchStore = {
  searchQuery: "",
};

export const useSearch = create<SearchStore>(() => initialState);

export const setSearchQuery = (newSearchQuery: string) =>
  useSearch.setState({ searchQuery: newSearchQuery });
