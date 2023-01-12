import React from "react";

const Counter = ({ count, title }) => {
  console.log(`rendering ${title}`);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default React.memo(Counter);
