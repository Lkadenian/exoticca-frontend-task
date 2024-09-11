import React from "react";
import styles from "./ContentSection.module.css";
import { Layout } from "../../utils/commonTypes";

const ContentSection: React.FC<Layout> = ({ children }) => {
  return <section className={styles.contentSection}>{children}</section>;
};

export default ContentSection;
