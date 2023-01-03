import React from "react";
import Logo from "../Logo/Logo";

export default function Navbar() {
  var age = 17;
  return (
    <div>
      {age === 18 ? "older" : age === 17 ? "roughly" : "not a number"}
      <input type="text" />
      <button>Focus the input</button>
      <Logo />
    </div>
  );
}
