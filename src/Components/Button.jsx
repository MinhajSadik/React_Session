import React from "react";

const Button = React.memo(function Button({ children, handleClick }) {
  console.log(`rendering button ${children}`);
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
});
export default Button;
