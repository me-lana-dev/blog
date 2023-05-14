import React from "react";
import Posts from "../components/Posts";

const PostPage: React.FC = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "50px" }}>Blog</h1>
      <Posts />
    </>
  );
};

export default PostPage;
