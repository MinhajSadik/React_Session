import { useState } from "react";
import { First } from "./First";

const initialState = {
  title: "",
  description: "",
};

function Welcome() {
  const [text, setText] = useState(initialState);

  const { title, description } = text;

  const [allText, setAllText] = useState([]);

  function handleAdd(e) {
    allText.push(description);
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
      <br />
      <textarea
        name="description"
        id=""
        value={description}
        cols="30"
        rows="4"
        onChange={(e) =>
          setText({
            ...text,
            description: e.target.value,
          })
        }
      />
      <br />
      <button onClick={handleAdd}>Add</button>
      <First allText={allText} />
    </div>
  );
}

export default Welcome;
