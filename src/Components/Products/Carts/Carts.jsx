import React from "react";
import styles from "./Carts.module.css";

export default function Carts({ products, activeColor, setActiveColor }) {
  const [UIcolor, setUIcolor] = React.useState(null);
  const [isShow, setIsShow] = React.useState(false);

  const getColor = (color) => {
    setUIcolor(color);
  };

  function handleToggle() {
    setIsShow((prevShow) => !prevShow);
  }

  console.log(isShow);
  return (
    <div>
      <h1 className={`${styles.heading} ${styles.fonts}`}>Products</h1>
      <button onClick={handleToggle}>
        {isShow ? "Less More" : "Show More"}
      </button>
      {isShow && (
        <p className={styles.peragraph}>This is your product from our shop</p>
      )}
    </div>
  );
}
