import React from "react";
import styles from "./TravelDetail.module.css";
import {
  getTravelById,
  changeTravelStatus,
  useTravels,
} from "@hooks/useTravels";
import CheckBlank from "@assets/CheckBlank";
import CheckGreen from "@assets/CheckGreen";

interface TravelCardProps {
  travelId: number;
}

const TravelDetail: React.FC<TravelCardProps> = ({ travelId }) => {
  useTravels((state) => state.travels);
  const travel = getTravelById(travelId);

  if (!travel) {
    return null;
  }

  const getStatusElement = () =>
    travel.status === "todo" ? (
      <button onClick={() => changeTravelStatus(travel.id, "done")}>
        <CheckBlank />
        Mark as completed
      </button>
    ) : (
      <button onClick={() => changeTravelStatus(travel.id, "todo")}>
        <CheckGreen />
        Completed
      </button>
    );

  return (
    <>
      <div className={styles.travelDetailImageContainer}>
        <img src={travel.photo_url} alt={travel.title} />
      </div>

      <div className={styles.travelDetailInfo}>
        <div className={styles.travelDetailTitle}>
          <h2>{travel.title}</h2>
          <div className={styles.travelDetailStatus}>{getStatusElement()}</div>
        </div>

        <div>{travel.description}</div>

        <hr />

        <h3>Itinerary</h3>

        {travel.itinerary.map((itineraryItem, idx) => (
          <div
            className={styles.itineraryItem}
            key={`${itineraryItem.day}-${idx}`}
          >
            <div>{`Day ${itineraryItem.day}: ${itineraryItem.location}`}</div>
            <div className={styles.itineraryDescription}>
              {itineraryItem.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TravelDetail;
