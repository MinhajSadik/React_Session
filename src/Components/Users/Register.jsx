import React from "react";

export default function Register() {
  const [registerInfo, setRegisterInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handleRegister() {
    try {
      const response = await fetch(
        "https://blogs-webiste-api.onrender.com/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerInfo),
        }
      );

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <input
        onChange={(e) =>
          setRegisterInfo({
            ...registerInfo,
            firstName: e.target.value,
          })
        }
        type="firstName"
        placeholder="firstName"
      />
      <input
        onChange={(e) =>
          setRegisterInfo({
            ...registerInfo,
            lastName: e.target.value,
          })
        }
        type="lastName"
        placeholder="lastName"
      />
      <input
        onChange={(e) =>
          setRegisterInfo({
            ...registerInfo,
            email: e.target.value,
          })
        }
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) =>
          setRegisterInfo({
            ...registerInfo,
            password: e.target.value,
          })
        }
        type="password"
        placeholder="password"
      />
      <input
        onChange={(e) =>
          setRegisterInfo({
            ...registerInfo,
            confirmPassword: e.target.value,
          })
        }
        type="confirmPassword"
        placeholder="confirmPassword"
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
