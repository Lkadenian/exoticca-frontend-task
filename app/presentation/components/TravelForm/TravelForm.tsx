import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { Travel, Itinerary } from "@types";
import FormItinerarySection from "../FormItinerarySection/FormItinerarySection";
import { closeDialog } from "@hooks/useDialog";
import styles from "./TravelForm.module.css";
import { emptyTravel } from "../../utils/emptyEntities";
import { getTravelById } from "@hooks/useTravels";

interface TravelFormProps {
  headingText: string;
  // eslint-disable-next-line no-unused-vars
  action: (travel: Travel) => void;
  travelId?: number;
}

const TravelForm: React.FC<TravelFormProps> = ({
  headingText,
  action,
  travelId,
}) => {
  const [travel, setTravel] = useState<Travel>(emptyTravel);
  const [erorrMessage, setErorrMessage] = useState<string>();

  useEffect(() => {
    if (travelId) {
      const travelForEdit = getTravelById(travelId);
      travelForEdit && setTravel(travelForEdit);
    }
  }, [travelId]);

  const setItinerary = (itinerary: Itinerary[]) =>
    setTravel((prev) => ({ ...prev, itinerary }));

  const handleSave = () => {
    if (
      travel.title === "" ||
      travel.description === "" ||
      travel.photo_url === ""
    ) {
      setErorrMessage("Title, description and image are required");
    } else {
      action(travel);
      closeDialog();
    }
  };

  return (
    <div className={styles.form}>
      <h2>{headingText}</h2>

      <div>
        <label htmlFor="travelName">Travel Name</label>
        <input
          id="travelName"
          type="text"
          value={travel.title}
          onChange={(e) =>
            setTravel((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>

      <div>
        <label htmlFor="introduction">Introduction (max. 240 characters)</label>
        <textarea
          id="introduction"
          maxLength={240}
          rows={2}
          value={travel.introduction}
          onChange={(e) =>
            setTravel((prev) => ({ ...prev, introduction: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={6}
          value={travel.description}
          onChange={(e) =>
            setTravel((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="text"
          value={travel.photo_url}
          onChange={(e) =>
            setTravel((prev) => ({ ...prev, photo_url: e.target.value }))
          }
        />
      </div>
      <div>
        <FormItinerarySection
          itinerary={travel.itinerary}
          setItinerary={setItinerary}
        />
      </div>
      {erorrMessage && (
        <div className={styles.errorMessage}>{erorrMessage}</div>
      )}
      <div>
        <Button onClick={() => handleSave()}>Save</Button>
      </div>
    </div>
  );
};

export default TravelForm;
