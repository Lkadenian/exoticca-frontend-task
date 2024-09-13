import React from "react";
import {
  render,
  screen,
  fireEvent,
  renderHook,
  act,
} from "@testing-library/react";
import {
  useDialog,
  openCreateTravelDialog,
  OpenEditTravelDialog,
  OpenShowTravelDialog,
} from "@hooks/useDialog";
import { Dialog } from "@components";

jest.mock("@api");

describe("Dialog Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not render anything when dialog is closed", () => {
    const { result } = renderHook(() => useDialog());
    const { container } = render(<Dialog />);

    expect(result.current.isOpen).toBe(false);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render the create travel form inside Dialog when dialogType is 'createTravel' and isOpen is true", () => {
    const { result } = renderHook(() => useDialog());
    render(<Dialog />);

    act(() => {
      openCreateTravelDialog();
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.dialogType).toBe("createTravel");
    expect(screen.getByText("Create a trip")).toBeInTheDocument();
  });

  it("should render the edit travel form inside Dialog when dialogType is 'editTravel' and isOpen is true", () => {
    const { result } = renderHook(() => useDialog());
    render(<Dialog />);

    act(() => {
      OpenEditTravelDialog(1);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.dialogType).toBe("editTravel");
    expect(screen.getByText("Edit a trip")).toBeInTheDocument();
  });

  it("should render TravelDetail inside Dialog when dialogType is 'showTravel' and isOpen is true", () => {
    render(<Dialog />);

    act(() => {
      OpenShowTravelDialog(1);
    });

    expect(screen.getByLabelText("close dialog")).toBeInTheDocument();
  });

  it("should call close Dialog when the close button is clicked", () => {
    render(<Dialog />);

    act(() => {
      openCreateTravelDialog();
    });

    const closeButton = screen.getByLabelText("close dialog");
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);

    expect(screen.queryByLabelText("close dialog")).not.toBeInTheDocument();
  });

  it("should close Dialog when clicking on the overlay", () => {
    const { container } = render(<Dialog />);

    act(() => {
      openCreateTravelDialog();
    });

    const modalOverlay = container.getElementsByClassName("modalOverlay")[0];
    expect(modalOverlay).toBeInTheDocument();

    fireEvent.click(modalOverlay);

    expect(screen.queryByLabelText("close dialog")).not.toBeInTheDocument();
  });
});
