import React from "react";
import styles from "./TravelCard.module.css";
import { Travel } from "@types";
import { OpenEditTravelDialog } from "@hooks/useDialog";

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
        <div className={styles.travelCardLinks}>
          <button className={styles.linkButton}>See details</button>
          <div className={styles.rightAlignedLinks}>
            <button
              className={styles.linkButton}
              onClick={() => {
                OpenEditTravelDialog(travel.id);
              }}
            >
              Edit
            </button>
            <button className={`${styles.linkButton} ${styles.redLinkButton}`}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
