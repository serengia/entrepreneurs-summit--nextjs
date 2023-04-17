import React from "react";
import s from "./Button.module.scss";

export default function Button({
  className,
  onClick,
  variant = "primary",
  children,
}) {
  return (
    <button
      className={`${s["btn"]} ${className} 
      ${variant === "secondary" ? s["btn-secondary"] : ""}
      ${variant === "outline" ? s["btn-outline"] : ""}
      ${variant === "primary" ? s["btn-primary"] : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
