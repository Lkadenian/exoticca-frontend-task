import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { Button } from "@components";

const SearchBar: React.FC = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        value={value}
        placeholder="Search trips"
        className={styles.searchBarInput}
        onChange={handleInputChange}
        aria-label="Search trips"
      />
      <Button size="small">Search</Button>
    </div>
  );
};

export default SearchBar;
