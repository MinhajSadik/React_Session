import React from "react";
import ProductList from "./ProductList";

export default function Categories({ category }) {
  return (
    <div>
      <span>{category.categoryName}</span>
      {category.products.map(({ id, productName }) => (
        <ProductList key={id} productName={productName} id={id} />
      ))}
    </div>
  );
}
