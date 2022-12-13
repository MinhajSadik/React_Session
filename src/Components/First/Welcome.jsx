import { useState } from "react";
import { First } from "./First";

const initialState = {
  title: "",
};

function Welcome() {
  const [text, setText] = useState(initialState);

  const { title } = text;

  const [allText, setAllText] = useState([]);

  function handleAdd(e) {
    allText.push(title);
    setText("");
  }

  return (
    <div>
      <h1>Welcome</h1>

      {/* <meter max={"100"} value={"10"} /> */}
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) =>
          setText({
            ...text,
            title: e.target.value,
          })
        }
      />
      <button onClick={handleAdd}>Add</button>

      <First allText={allText} />
    </div>
  );
}

export default Welcome;
