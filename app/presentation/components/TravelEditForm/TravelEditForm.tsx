import React, { useState } from "react";
import styles from "./TravelEditForm.module.css";
import Button from "../Button/Button";
import FormItinerarySection from "../FormItinerarySection/FormItinerarySection";
import PlusIcon from "@assets/PlusIcon";
import { Itinerary } from "@types";

const TravelEditForm: React.FC = () => {
  const [itinerary, setItinerary] = useState<Itinerary[]>([
    { day: 1, location: "", description: "" },
  ]);

  const addItinerary = () => {
    setItinerary([
      ...itinerary,
      { day: itinerary.length + 1, location: "", description: "" },
    ]);
  };

  return (
    <div className={styles.form}>
      <h2>Create a trip</h2>

      <div className={styles.formEntry}>
        <label>Travel Name</label>
        <input type="text" />
      </div>

      <div className={styles.formEntry}>
        <label>Introduction (max. 240 characters)</label>
        <textarea maxLength={240} rows={2} />
      </div>

      <div className={styles.formEntry}>
        <label>Description</label>
        <textarea rows={6} />
      </div>

      <div className={styles.formEntry}>
        <label>Image</label>
        <input type="text" />
      </div>

      <div className={styles.formEntry}>
        <button className={styles.addItineraryDay} onClick={addItinerary}>
          <PlusIcon />
        </button>
        <label>Day by day itinerary</label>
        <FormItinerarySection itinerary={itinerary} />
      </div>

      <div>
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default TravelEditForm;
