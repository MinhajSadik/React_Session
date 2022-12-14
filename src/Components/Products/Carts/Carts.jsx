import React from "react";
import Checkout from "./Checkout/Checkout";

export default function Carts({ products }) {
  const [UIcolor, setUIcolor] = React.useState(null);

  const getColor = (color) => {
    setUIcolor(color);
  };

  return (
    <div>
      <div className="uiColor" style={{ background: `${UIcolor}` }}></div>
      <Checkout getColor={getColor} />
    </div>
  );
}
