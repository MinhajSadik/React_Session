import React from "react";

const Button = React.memo(({ children, handleClick, count, calculation }) => {
  return (
    <div>
      Count: {count}
      <button type="button" onClick={handleClick}>
        {children}
      </button>
      <h2>Expensive Calculation</h2>
      {calculation}
    </div>
  );
});

export default Button;
