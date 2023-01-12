import React, { useRef } from "react";
import Button from "./Button/Button";

const WellComponent = () => {
  const [time, setTime] = React.useState(new Date());
  const intervalRef = useRef(new Date());


  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
      <Button onClick={() => clearInterval(intervalRef.current)}>Stop</Button>
    </div>
  );
};

export default WellComponent;
