import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  variant: "black" | "white";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "black",
  onClick,
  children,
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
