import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "14px",
      }}
    >
      {props.children}
    </div>
  );
}
