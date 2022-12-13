import React from "react";
import Carts from "./Carts/Carts";

export default function Products() {
  const products = "products list";
  return (
    <div>
      <Carts products={products} />
    </div>
  );
}
