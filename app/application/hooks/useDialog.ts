import { create } from "zustand";
import { produce } from "immer";
import { DialogType } from "@types";

type IDialog = {
  isOpen: boolean;
  dialogType: DialogType;
};

export const useDialog = create<IDialog>(() => {
  const initialState = {
    isOpen: false,
    dialogType: null,
  };

  return initialState;
});

export const openDialog = (dialogType: DialogType) =>
  useDialog.setState((state) =>
    produce(state, (draftState) => {
      draftState.isOpen = true;
      draftState.dialogType = dialogType;
    })
  );

export const closeDialog = () =>
  useDialog.setState((state) =>
    produce(state, (draftState) => {
      draftState.isOpen = false;
      draftState.dialogType = null;
    })
  );
