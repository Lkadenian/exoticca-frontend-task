import React from "react";
import styles from "./MainContainer.module.css";
import { Layout } from "../utils/commonTypes";

const MainContainer: React.FC<Layout> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainContainer;
