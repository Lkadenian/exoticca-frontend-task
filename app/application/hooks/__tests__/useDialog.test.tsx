import { renderHook, act } from "@testing-library/react";
import {
  useDialog,
  openCreateTravelDialog,
  OpenEditTravelDialog,
  OpenShowTravelDialog,
  closeDialog,
} from "@hooks/useDialog";

describe("useDialog store", () => {
  it("should initialize with the correct default state", () => {
    const { result } = renderHook(() => useDialog());

    expect(result.current.isOpen).toBe(false);
    expect(result.current.dialogType).toBe(null);
    expect(result.current.travelId).toBeUndefined();
  });

  it("should open create travel dialog", () => {
    const { result } = renderHook(() => useDialog());

    act(() => {
      openCreateTravelDialog();
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.dialogType).toBe("createTravel");
    expect(result.current.travelId).toBeUndefined();
  });

  it("should open edit travel dialog with a travelId", () => {
    const { result } = renderHook(() => useDialog());
    const travelId = 1;

    act(() => {
      OpenEditTravelDialog(travelId);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.dialogType).toBe("editTravel");
    expect(result.current.travelId).toBe(travelId);
  });

  it("should open show travel dialog with a travelId", () => {
    const { result } = renderHook(() => useDialog());
    const travelId = 1;

    act(() => {
      OpenShowTravelDialog(travelId);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.dialogType).toBe("showTravel");
    expect(result.current.travelId).toBe(travelId);
  });

  it("should close the dialog and reset to initial state", () => {
    const { result } = renderHook(() => useDialog());

    act(() => {
      openCreateTravelDialog();
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.dialogType).toBe("createTravel");

    act(() => {
      closeDialog();
    });

    expect(result.current.isOpen).toBe(false);
    expect(result.current.dialogType).toBe(null);
    expect(result.current.travelId).toBeUndefined();
  });
});
