import React from "react";

function Welcome() {
  const [text, setText] = React.useState("");
  const [allText, setAllText] = React.useState([]);

  function handleAdd(e) {
    allText.push(text);
    setText("");
  }

  return (
    <div>
      <h1>Welcome to our</h1>
      <meter max={"100"} value={"10"} />
      <input
        name="text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
      {allText.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      {/* <First allText={allText} /> */}
    </div>
  );
}

export default Welcome;
