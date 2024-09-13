import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Travel, TravelStatus } from "@types";
import { fetchTravels } from "@api";
import { produce } from "immer";

type TravelsStore = {
  travels: Travel[];
  loading: boolean;
  fetchData: () => void;
};

const fetchData = async () => {
  const storedTravels = useTravels.getState().travels;

  if (!storedTravels.length) {
    const fetchedTravels = await fetchTravels();
    setTravels(fetchedTravels);
  }

  setLoading(false);
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

export const getTravelById = (travelId: number) =>
  useTravels.getState().travels.find((travel) => travel.id === travelId);

export const addTravel = (travel: Travel) => {
  const newId = (useTravels.getState().travels.at(-1)?.id || 0) + 1;
  const newTravel = { ...travel, id: newId };
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

export const deleteTravel = (travelId: number) => {
  const deletingTravelIndex = useTravels
    .getState()
    .travels.findIndex((travel) => travel.id === travelId);

  useTravels.setState((state) =>
    produce(state, (draftState) => {
      draftState.travels.splice(deletingTravelIndex, 1);
    })
  );
};

export const changeTravelStatus = (travelId: number, status: TravelStatus) => {
  const editingTravelIndex = useTravels
    .getState()
    .travels.findIndex((travel) => travel.id === travelId);

  useTravels.setState((state) =>
    produce(state, (draftState) => {
      draftState.travels[editingTravelIndex].status = status;
    })
  );
};
