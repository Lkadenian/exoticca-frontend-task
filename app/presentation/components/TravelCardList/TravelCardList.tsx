import React, { useEffect } from "react";
import styles from "./TravelCardList.module.css";
import { Travel } from "@types";
import TravelCard from "../TravelCard/TravelCard";
import { useSearch } from "@hooks/useSearch";
import { useNavTabs } from "@hooks/useNavTabs";
import { useTravels } from "@hooks/useTravels";

const TravelCardList: React.FC = () => {
  const { fetchData, loading, travels } = useTravels((state) => state);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

  const filteredTravelList = filterTravelList(travels);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className={styles.travelCardList}>
      {filteredTravelList.length ? (
        filteredTravelList.map((travel, idx) => (
          <TravelCard key={`${idx}-${travel.id}`} travel={travel} />
        ))
      ) : (
        <>No trips found</>
      )}
    </div>
  );
};

export default TravelCardList;
