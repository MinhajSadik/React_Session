import React from "react";
import { sculptureList } from "../../data";

export default function ProductCard() {
  const [index, setIndex] = React.useState(0);

  console.log("Index");

  function handleNext() {
    setIndex((prevIndex) => prevIndex + 1);
  }
  function handlePrev() {
    setIndex((prevIndex) => prevIndex - 1);
  }

  const list = sculptureList[index];
  return (
    <>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Previous</button>
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
