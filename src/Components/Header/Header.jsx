import React from "react";
import "./Header.css";

export default function Header({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "14px",
      }}
    >
      {children}
    </div>
  );
}
