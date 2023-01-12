import React from "react";
const Button = ({ type, onClick, children }) => {
  console.log(`rendering ${children}`);

  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
