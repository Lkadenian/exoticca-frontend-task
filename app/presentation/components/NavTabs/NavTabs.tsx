import React from "react";
import styles from "./NavTabs.module.css";
import { setSearchQuery, useNavTabs } from "@hooks/useNavTabs";
import { TabNavs } from "@types";

const NavTabs: React.FC = () => {
  const handleTabClick = (tab: TabNavs) => {
    setSearchQuery(tab);
  };
  const selectedTab = useNavTabs((state) => state.selectedTab);

  return (
    <div className={styles.navTabs}>
      <button
        onClick={() => handleTabClick(TabNavs.all)}
        className={selectedTab === TabNavs.all ? styles.active : ""}
      >
        All
      </button>
      <button
        onClick={() => handleTabClick(TabNavs.upcoming)}
        className={selectedTab === TabNavs.upcoming ? styles.active : ""}
      >
        Upcoming
      </button>
      <button
        onClick={() => handleTabClick(TabNavs.completed)}
        className={selectedTab === TabNavs.completed ? styles.active : ""}
      >
        Completed
      </button>
    </div>
  );
};

export default NavTabs;
