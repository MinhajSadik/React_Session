import React from "react";
import "./Login.css";

export default function Login() {
  const [registerInfo, setRegisterInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function onInputChange(e) {
    const { name, value } = e.target;
    setRegisterInfo({
      ...registerInfo,
      [name]: value,
    });
  }
  async function handleLogin() {
    try {
      const responese = await fetch(
        "https://blogs-webiste-api.onrender.com/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerInfo),
        }
      );
      const result = await responese.json();

      console.log({ result });
    } catch (error) {}
  }
  console.log(JSON.stringify(registerInfo));
  return (
    <div>
      <input
        type="firstName"
        id="lastName"
        name="lastName"
        onChange={onInputChange}
      />
      <input
        type="lastName"
        id="lastName"
        name="lastName"
        onChange={onInputChange}
      />
      <input type="email" id="email" name="email" onChange={onInputChange} />
      <input
        // type="password"
        id="password"
        name="password"
        onChange={onInputChange}
      />
      <input
        type="confirmPassword"
        id="confirmPassword"
        name="confirmPassword"
        onChange={onInputChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
