import React from "react";
import Carts from "./Carts/Carts";

export default function Products() {
  const [loading, setLoading] = React.useState(false);
  const [activeColor, setActiveColor] = React.useState(null);
  const products = ["products list"];

  return (
    <React.Fragment>
      {loading ? (
        <>
          <h1>Loading</h1>
          <p>Please Check your internet connection</p>
        </>
      ) : (
        <div>
          <Carts
            products={products}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
        </div>
      )}
    </React.Fragment>
  );
}
