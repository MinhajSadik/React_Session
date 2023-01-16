import React, { useRef } from "react";
import Button from "./Button/Button";

const WellComponent = () => {
  const divRef = useRef(null);

  const [time, setTime] = React.useState(new Date());
  const intervalRef = useRef(new Date());

  return (
    <div onClick={() => console.log(divRef.current)}>
      ref
      <p>{time.toLocaleTimeString()}</p>
      <Button onClick={() => clearInterval(intervalRef.current)}>Stop</Button>
    </div>
  );
};

export default WellComponent;
