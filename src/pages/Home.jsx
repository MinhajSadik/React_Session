import React from "react";
import Layout from "../Components/Layout/Layout";
import Posts from "../Components/Posts/Posts";
import Login from "../Components/Users/Login";
import Register from "../Components/Users/Register";

const Home = () => {
  return (
    <Layout>
      <Posts />
      <Login />
      <Register />
    </Layout>
  );
};

export default Home;
