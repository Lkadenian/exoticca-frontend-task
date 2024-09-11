import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "black" | "white";
  size?: "normal" | "small";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "black",
  size = "normal",
  onClick,
  children,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
