import React from "react";
// import PostsOld from "../components/PostsOld";
import Posts from "../components/Posts";

const PostPage: React.FC = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "50px" }}>Blog</h1>
      <Posts />
      {/* <PostsOld /> */}
    </>
  );
};

export default PostPage;
