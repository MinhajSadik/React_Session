import React from "react";

export default function Categories({ category }) {
  const [selected, setSelected] = React.useState("");
  function changeColor(id) {
    setSelected(id);
  }

  return (
    <div>
      <span>{category.categoryName}</span>
      {category.products.map(({ id, productName }) => (
        <ul key={id}>
          <li onClick={(e) => changeColor(id)}>
            <h1 style={{ color: selected === id ? "red" : "" }}>
              {productName}
            </h1>
          </li>
        </ul>
      ))}
    </div>
  );
}
