import React from "react";
import styles from "./FormItinerarySection.module.css";
import ChevronIcon from "@assets/ChevronIcon";
import { Itinerary } from "@types";
import PlusIcon from "@assets/PlusIcon";

interface FormItinerarySectionProps {
  itinerary: Itinerary[];
  setItinerary: (itinerary: Itinerary[]) => void;
}

const FormItinerarySection: React.FC<FormItinerarySectionProps> = ({
  itinerary,
  setItinerary,
}) => {
  const addItinerary = () => {
    setItinerary([
      ...itinerary,
      { day: itinerary.length + 1, location: "", description: "" },
    ]);
  };

  const updateItinerary = (
    propName: string,
    value: string | number,
    index: number
  ) => {
    const updatedItinerary = [...itinerary];
    updatedItinerary[index] = {
      ...updatedItinerary[index],
      [propName]: value,
    };
    setItinerary(updatedItinerary);
  };

  return (
    <>
      <button className={styles.addItineraryDay} onClick={addItinerary}>
        <PlusIcon />
      </button>
      <label>Day by day itinerary</label>

      <div className={styles.itinerary}>
        {itinerary.map((slot, index) => (
          <div key={`${slot.day}-${index}`} className={styles.itineraryEntry}>
            <div>
              <div className={styles.selectWrapper}>
                <select
                  defaultValue={slot.day}
                  onChange={(e) => {
                    updateItinerary("day", parseInt(e.target.value), index);
                  }}
                >
                  {[...Array(itinerary.length + 4)].map((_, idx) => (
                    <option key={idx + 1} value={idx + 1}>
                      {idx + 1}
                    </option>
                  ))}
                </select>
                <span className={styles.customArrow}>
                  <ChevronIcon />
                </span>
              </div>
            </div>
            <div className={styles.itineraryOptions}>
              <div>
                <input
                  placeholder="Location"
                  type="text"
                  value={slot.location}
                  onChange={(e) => {
                    updateItinerary("location", e.target.value, index);
                  }}
                />
              </div>
              <div>
                <textarea
                  placeholder="Description"
                  rows={5}
                  value={slot.description}
                  onChange={(e) => {
                    updateItinerary("description", e.target.value, index);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FormItinerarySection;
