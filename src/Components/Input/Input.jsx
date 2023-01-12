import React from "react";

const Input = React.forwardRef(
  ({ type, placeholder, value, onChange }, inputRef) => {
    console.log(inputRef.current);
    return (
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);

export default React.memo(Input);
