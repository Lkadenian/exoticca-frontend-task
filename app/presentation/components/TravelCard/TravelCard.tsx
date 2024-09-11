import React from "react";
import styles from "./TravelCard.module.css";
import { Travel } from "@types";

interface TravelCardProps {
  travel: Travel;
}

const TravelCard: React.FC<TravelCardProps> = ({ travel }) => {
  return (
    <div className={styles.travelCard}>
      <div className={styles.travelCardImageContainer}>
        <img
          className={styles.travelCardImage}
          src={travel.photo_url}
          alt={travel.title}
        />
      </div>
      <div className={styles.travelCardInfo}>
        <div className={styles.travelCardTitle}>{travel.title}</div>
        <div className={styles.travelCardDescription}>{travel.description}</div>
        <div className={styles.travelCardLinks}></div>
      </div>
    </div>
  );
};

export default TravelCard;
