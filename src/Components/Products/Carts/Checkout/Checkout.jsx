import React from "react";

export default function Checkout({ getColor }) {
  const [activeColor, setActiveColor] = React.useState();
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
