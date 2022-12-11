import React from "react";
import { First } from "./First/First";

function Welcome(props) {
  const [progress, setProgress] = React.useState(0);
  const { message } = props;
  const [loding, setLoading] = React.useState(true);
  function handleLoading() {
    setLoading(false);
  }
  function handleProgress() {
    setProgress((prevProg) => prevProg + 10);
  }

  return (
    <div>
      <h1>Welcome to our</h1>
      {!loding && <meter max={"100"} value={progress} />}
      <meter max={"100"} value={progress} />
      <button onClick={handleProgress}>Next</button>
      <First message={message} />
    </div>
  );
}

export default Welcome;
