import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.profession}</p>
    </div>
  );
};

export default User;
