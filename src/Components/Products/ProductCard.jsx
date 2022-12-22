import React from "react";
import { sculptureList } from "../../data";

export default function ProductCard() {
  const [index, setIndex] = React.useState(0);


  const list = sculptureList[index];
  return (
    <>
      <button onClick>Next</button>
      <h2>
        <i>{list.name} </i>
        by {list.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={list.url} alt={list.alt} />
      <p>{list.description}</p>
    </>
  );
}
