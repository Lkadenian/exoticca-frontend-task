import React from "react";
import styles from "./TravelCardList.module.css";
import { Travel } from "@types";
import TravelCard from "../TravelCard/TravelCard";

interface TravelCardListProps {
  travelList: Travel[];
}

const TravelCardList: React.FC<TravelCardListProps> = ({ travelList }) => {
  return (
    <div className={styles.travelCardList}>
      {travelList.length &&
        travelList.map((travel, idx) => (
          <TravelCard key={`${idx}-${travel.id}`} travel={travel} />
        ))}
    </div>
  );
};

export default TravelCardList;
