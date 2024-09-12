import React from "react";
import styles from "./Header.module.css";
import { Button } from "@components";
import Logo from "@assets/Logo";
import { openCreateTravelDialog } from "@hooks/useDialog";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Button variant="white" onClick={openCreateTravelDialog}>
        Create new trip
      </Button>
    </header>
  );
};

export default Header;
