import React from "react";
import ProductList from "./ProductList";

export default function Categories({ category }) {
  const [selected, setSelected] = React.useState("");

  return (
    <div>
      <span>{category.categoryName}</span>
      {category.products.map(({ id, productName }) => (
        // <ul key={id}>
        //   <li
        //     style={{ color: selected === id ? "red" : "" }}
        //     onClick={() => setSelected(id)}
        //   >
        //     {productName}
        //   </li>
        // </ul>
        <ProductList key={id} productName={productName} />
      ))}
    </div>
  );
}
