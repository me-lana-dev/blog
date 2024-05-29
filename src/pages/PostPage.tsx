import React from "react";
import Post from "../components/Post/Post";
import Comments from "../components/Comments/Comments";

const PostPage: React.FC = () => {
  return (
    <>
      <Post />
      <Comments />
    </>
  );
};

export default PostPage;
