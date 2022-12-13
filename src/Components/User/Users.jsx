import React from "react";
import User from "./User";

const Users = () => {
  const users = [
    {
      name: "Minhaj",
      profession: "developer",
    },
    {
      name: "Fahim",
      profession: "designer",
    },
  ];
  return (
    <div>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};

export default Users;
