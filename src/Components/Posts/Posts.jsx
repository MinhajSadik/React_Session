import Axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/post`)
      .then((data) => setPosts(data.data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}
