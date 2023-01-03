import React, { useContext, useRef } from "react";
import { UserContext } from "../../contexts/contexts";
import "./Login.css";

export default function Login() {
  const user = useContext(UserContext);
  const inputRef = useRef(null);

  function handleFocusInput() {
    inputRef.current?.focus();
  }

  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });

  async function handleLogin(e) {
    try {
      const response = await fetch(
        "https://blogs-webiste-api.onrender.com/users/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        }
      );

      const result = await response.json();

      sessionStorage.setItem("user", JSON.stringify(result));
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="i am learning use ref hook"
      />
      <button onClick={handleFocusInput}>Focus Me</button>
      <br />
      <input
        onChange={(e) =>
          setLoginInfo({
            ...loginInfo,
            email: e.target.value,
          })
        }
        placeholder="email"
        type="email"
      />
      <input
        onChange={(e) =>
          setLoginInfo({
            ...loginInfo,
            password: e.target.value,
          })
        }
        placeholder="password"
        type="password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
