import React from "react";
import Checkout from "./Checkout/Checkout";

export default function Carts({ products }) {
  return (
    <div>
      <Checkout products={products} />
    </div>
  );
}
