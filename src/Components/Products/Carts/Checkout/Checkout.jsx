import React from "react";

export default function Checkout({ getColor, activeColor, setActiveColor }) {
  function handleInput(e) {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  }

  return (
    <div>
      <input type="text" value={activeColor} onChange={handleInput} />
    </div>
  );
}
