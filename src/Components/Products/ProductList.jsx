import React from "react";

export default function ProductList({ productName, id }) {
  const [selected, setSelected] = React.useState("");

  return (
    <div>
      <h1
        style={{ color: selected === id ? "red" : "" }}
        onClick={() => setSelected(id)}
      >
        {productName}
      </h1>
    </div>
  );
}
