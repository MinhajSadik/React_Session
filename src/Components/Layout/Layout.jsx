import React from "react";

export default function Layout(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        color: "red",
        fontWeight: "600",
        fontSize: "72px",
      }}
    >
      {props.children}
    </div>
  );
}
