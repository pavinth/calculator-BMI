import React from "react";
import styles from "../styles/button.module.css";
interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  value?: string | null;
  clickFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ type, value, clickFunc }: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      onClick={(e) => clickFunc(e)}
      className={styles.btn}
    >
      {value || "Enter"}
    </button>
  );
};

export default Button;
