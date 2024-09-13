import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Travel } from "@types";
import { fetchTravels } from "@api";
import { produce } from "immer";

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

export const getTravelById = (travelId: string) =>
  useTravels.getState().travels.find((travel) => travel.id === travelId);

export const addTravel = (travel: Travel) => {
  const newId = parseInt(useTravels.getState().travels.at(-1)?.id || "1") + 1;
  const newTravel = { ...travel, id: newId.toString() };
  useTravels.setState((state) => ({ travels: [...state.travels, newTravel] }));
};

export const editTravel = (editingTravel: Travel) => {
  const editingTravelIndex = useTravels
    .getState()
    .travels.findIndex((travel) => travel.id === editingTravel.id);

  useTravels.setState((state) =>
    produce(state, (draftState) => {
      draftState.travels[editingTravelIndex] = editingTravel;
    })
  );
};
