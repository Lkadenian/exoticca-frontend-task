import React from "react";
import styles from "./Headings.module.css";

const SearchBar: React.FC = () => {
  return (
    <>
      <h1 className={styles.h1}>The places you dream of </h1>
      <h2 className={styles.h2}>Let's live new adventures</h2>
    </>
  );
};

export default SearchBar;
