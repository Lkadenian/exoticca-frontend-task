import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Travel } from "@types";
import { fetchTravels } from "@api";

type TravelsStore = {
  travels: Travel[];
  loading: boolean;
  fetchData: () => void;
};

const fetchData = async () => {
  const storedTravels = useTravels.getState().travels;
  const res = storedTravels.length > 1 ? storedTravels : await fetchTravels();
  setLoading(false);
  return res;
};

const initialState: TravelsStore = {
  travels: [],
  loading: true,
  fetchData,
};

const persistanceOptions = { name: "travels" };

export const useTravels = create(
  persist<TravelsStore>(() => initialState, persistanceOptions)
);

export const setTravels = (travels: Travel[]) =>
  useTravels.setState({ travels });

export const setLoading = (loading: boolean) =>
  useTravels.setState((state) => ({ ...state, loading: loading }));
