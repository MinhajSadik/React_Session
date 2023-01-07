import React from "react";

export default function ShowCount({ title, count }) {
  console.log(`rendering ${title}`);
  return (
    <div>
      {title} is {count}
    </div>
  );
}
