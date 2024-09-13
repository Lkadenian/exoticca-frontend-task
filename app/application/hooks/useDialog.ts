import { create } from "zustand";
import { DialogType } from "@types";

type DialogState = {
  isOpen: boolean;
  dialogType: DialogType;
  travelId?: number;
};

const initialState: DialogState = {
  isOpen: false,
  dialogType: null,
  travelId: undefined,
};

export const useDialog = create<DialogState>(() => initialState);

export const openCreateTravelDialog = () =>
  useDialog.setState({
    isOpen: true,
    dialogType: "createTravel",
  });

export const OpenEditTravelDialog = (travelId: number) =>
  useDialog.setState({
    isOpen: true,
    dialogType: "editTravel",
    travelId: travelId,
  });

export const OpenShowTravelDialog = (travelId: number) =>
  useDialog.setState({
    isOpen: true,
    dialogType: "showTravel",
    travelId: travelId,
  });

export const closeDialog = () => useDialog.setState(initialState);
