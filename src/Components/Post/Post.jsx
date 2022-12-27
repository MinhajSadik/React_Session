import React, { useContext } from "react";
import { UserContext } from "../../App";
import postModule from "./Post.module.css";

export default function Post({ post }) {
  const user = useContext(UserContext);
  return (
    <div className={postModule.card}>
      {user.isLoggedIn && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      )}
    </div>
  );
}
