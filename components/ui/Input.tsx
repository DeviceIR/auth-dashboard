"use client";
import { forwardRef } from "react";
import styles from "./input.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, className, ...rest }, ref) => {
    return (
      <div className={`${styles.field} ${className ?? ""}`}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={ref}
          className={`${styles.input} ${error ? styles.invalid : ""}`}
          {...rest}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
