import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { Button } from "@components";
import { setSearchQuery } from "@hooks/useSearch";

const SearchBar: React.FC = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSearchClick = () => {
    setSearchQuery(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchQuery(value);
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        value={value}
        placeholder="Search trips"
        className={styles.searchBarInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearchClick} size="small">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
