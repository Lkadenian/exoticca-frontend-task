import React from "react";
import styles from "./TravelCardList.module.css";
import { Travel } from "@types";
import TravelCard from "../TravelCard/TravelCard";
import { useSearch } from "@hooks/useSearch";
import { useNavTabs } from "@hooks/useNavTabs";

interface TravelCardListProps {
  travelList: Travel[];
}

const TravelCardList: React.FC<TravelCardListProps> = ({ travelList }) => {
  const searchQuery = useSearch((state) => state.searchQuery);
  const selectedTab = useNavTabs((state) => state.selectedTab);

  const filterTravelList = (travels: Travel[]) => {
    return travels.filter((travel) => {
      const matchesSearchQuery =
        !searchQuery ||
        travel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        travel.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTab =
        selectedTab === "all" ||
        (selectedTab === "upcoming" && travel.status === "todo") ||
        (selectedTab === "completed" && travel.status === "done");

      return matchesSearchQuery && matchesTab;
    });
  };

  const filteredTravelList = filterTravelList(travelList);

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
