import React from "react";
import styles from "./NavTabs.module.css";
import { setSelectedTab, useNavTabs } from "@hooks/useNavTabs";
import { TabNavs } from "@types";

const NavTabs: React.FC = () => {
  const handleTabClick = (tab: TabNavs) => {
    setSelectedTab(tab);
  };
  const selectedTab = useNavTabs((state) => state.selectedTab);
  console.log("selectedTab", selectedTab);
  return (
    <div className={styles.navTabs}>
      <button
        onClick={() => handleTabClick("all")}
        className={selectedTab === "all" ? styles.active : ""}
      >
        All
      </button>
      <button
        onClick={() => handleTabClick("upcoming")}
        className={selectedTab === "upcoming" ? styles.active : ""}
      >
        Upcoming
      </button>
      <button
        onClick={() => handleTabClick("completed")}
        className={selectedTab === "completed" ? styles.active : ""}
      >
        Completed
      </button>
    </div>
  );
};

export default NavTabs;
