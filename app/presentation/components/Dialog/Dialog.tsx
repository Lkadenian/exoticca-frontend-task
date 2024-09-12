import React from "react";
import styles from "./Dialog.module.css";
import { useDialog, closeDialog } from "@hooks/useDialog";
import { TravelCreationForm } from "@components";
import TimesIcon from "@assets/TimesIcon";

const Dialog: React.FC = () => {
  const { isOpen, dialogType, travelId} = useDialog((state) => state);

  if (!isOpen || !dialogType) return null;

  return (
    <>
      <div className={styles.dialogBox}>
        <button className={styles.closeButton} onClick={closeDialog}>
          <TimesIcon />
        </button>
        <>
          {dialogType === "editTravel" && (
            <TravelCreationForm travelId={travelId} />
          )}
          {dialogType === "createTravel" && <TravelCreationForm />}
          {dialogType === "showTravel" && <h3>Show Travel</h3>}
        </>
      </div>
      <div className={styles.modalOverlay} onClick={closeDialog}></div>
    </>
  );
};

export default Dialog;
