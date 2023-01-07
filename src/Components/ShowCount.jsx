import React from "react";

function ShowCount({ title, count }) {
  console.log(`rendering ${title}`);
  return (
    <div>
      {title} is {count}
    </div>
  );
}

export default React.memo(ShowCount);
