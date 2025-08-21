"use client";
import { forwardRef } from "react";
import styles from "./button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ loading, children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`${styles.btn} ${className ?? ""}`}
        disabled={loading || rest.disabled}
        {...rest}
      >
        {loading ? "Loading…" : children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
