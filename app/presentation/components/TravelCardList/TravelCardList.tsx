import React from "react";
import styles from "./TravelCardList.module.css";
import { Travel } from "@types";
import TravelCard from "../TravelCard/TravelCard";
import { useSearch } from "@hooks/useSearch";

interface TravelCardListProps {
  travelList: Travel[];
}

const TravelCardList: React.FC<TravelCardListProps> = ({ travelList }) => {
  const searchQuery = useSearch((state) => state.searchQuery);

  const filteredTravelList = searchQuery
    ? travelList.filter(
        (travel) =>
          travel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          travel.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : travelList;

  return (
    <div className={styles.travelCardList}>
      {filteredTravelList.length ? (
        filteredTravelList.map((travel, idx) => (
          <TravelCard key={`${idx}-${travel.id}`} travel={travel} />
        ))
      ) : (
        <>No results found</>
      )}
    </div>
  );
};

export default TravelCardList;
