import React from "react";
import styles from "./ButtonGroup.module.css";

const ButtonGroup: React.FC = () => {
  return (
    <div className={styles.buttonGroup}>
      <button>All</button>
      <button>Upcoming</button>
      <button>Completed</button>
    </div>
  );
};

export default ButtonGroup;
