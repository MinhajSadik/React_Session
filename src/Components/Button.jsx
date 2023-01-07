import React from "react";

export default function Button({ children, handleClick }) {
  console.log(`rendering button ${children}`);
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}
