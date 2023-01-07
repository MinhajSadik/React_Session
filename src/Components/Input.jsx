import React, { forwardRef } from "react";

const Input = forwardRef(({ type, value }, inputRef) => {
  console.log("Input");
  React.useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return <input ref={inputRef} type={type} placeholder={value} />;
});

export default Input;
