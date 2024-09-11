import React from "react";
import styles from "./Header.module.css";
import { Logo, Button } from "@components";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Button variant="white">Create new trip</Button>
    </header>
  );
};

export default Header;
