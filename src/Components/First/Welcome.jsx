import React, { useContext } from "react";
import { UserContext } from "../../index";

function Welcome(props) {
  const userContext = useContext(UserContext);
  console.log("UserContext", userContext);
  const { message } = props;

  return (
    <div>
      <h1>Welcome to our {message}</h1>
      <meter max={"200"} value={"100"} />
    </div>
  );
}

export default Welcome;
