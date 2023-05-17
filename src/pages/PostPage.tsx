import React from "react";
import Post from "../components/Post";
import Comments from "../components/Comments";

const PostPage: React.FC = () => {
  return (
    <>
      <Post />
      <Comments />
    </>
  );
};

export default PostPage;
