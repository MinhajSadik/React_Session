import React, { useContext } from "react";
import { StylesContext } from "../../../App";
import Login from "../Login/Login";

export default function Logo() {
  const stylesContext = useContext(StylesContext);
  console.log(stylesContext);
  return (
    <div
      style={{
        color: stylesContext.coloR,
        fontSize: stylesContext.fontSize,
        backgroundColor: stylesContext.backgroundColor,
      }}
    >
      <Login />
    </div>
  );
}
