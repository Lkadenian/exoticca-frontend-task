import React from "react";
import styles from "./Dialog.module.css";
import { useDialog, closeDialog } from "@hooks/useDialog";
import { TravelForm, TravelDetail } from "@components";
import TimesIcon from "@assets/TimesIcon";
import { addTravel, editTravel } from "@hooks/useTravels";

const Dialog: React.FC = () => {
  const { isOpen, dialogType, travelId } = useDialog((state) => state);

  if (!isOpen || !dialogType) return null;

  return (
    <>
      <div className={styles.dialogBox}>
        <button className={styles.closeButton} onClick={closeDialog}>
          <TimesIcon />
        </button>
        <>
          {dialogType === "createTravel" && (
            <TravelForm headingText="Create a trip" action={addTravel} />
          )}
          {dialogType === "editTravel" && (
            <TravelForm
              headingText="Edit a trip"
              action={editTravel}
              travelId={travelId}
            />
          )}
          {dialogType === "showTravel" && travelId && (
            <TravelDetail travelId={travelId} />
          )}
        </>
      </div>
      <div className={styles.modalOverlay} onClick={closeDialog}></div>
    </>
  );
};

export default Dialog;
