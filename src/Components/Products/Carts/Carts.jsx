import PropTypes from "prop-types";
import React from "react";
import Checkout from "./Checkout/Checkout";

export default function Carts() {
  const [UIcolor, setUIcolor] = React.useState(null);

  const getColor = (color) => {
    setUIcolor(color);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: `${UIcolor}`,
          width: "150px",
          height: "150px",
        }}
      ></div>
      <Checkout getColor={getColor} />
    </div>
  );
}

Carts.propTypes = {
  products: PropTypes.array.isRequired,
  activeColor: PropTypes.bool,
  setActiveColor: PropTypes.func,
};

Carts.defaultProps = {
  products: [1, 2, 3, 4],
};
