import React from "react";
import styles from "./FormItinerarySection.module.css";
import ChevronIcon from "@assets/ChevronIcon";

type Itinerary = {
  day: number;
  location: string;
  description: string;
};

interface FormItinerarySectionProps {
  itinerary: Itinerary[];
}

const FormItinerarySection: React.FC<FormItinerarySectionProps> = ({
  itinerary,
}) => {
  return (
    <div className={styles.itinerary}>
      {itinerary.map((item, index) => (
        <div key={index} className={styles.itineraryEntry}>
          <div>
            <div className={styles.selectWrapper}>
              <select>
                {[...Array(itinerary.length + 5)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
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
              <input placeholder="Location" type="text" />
            </div>
            <div>
              <textarea placeholder="Description" rows={5} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormItinerarySection;
