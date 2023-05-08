import React from "react";
import Header from "./Header";
import Post from "./Post";
import Slide from "./slide_bar";

function index() {
  return (
    <div>
      <h1>Home 2 </h1>
      <Slide />
      <Post />
      <Header />
      <Slide />
    </div>
  );
}

export default index;
