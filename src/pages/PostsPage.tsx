import React from "react";
import Posts from "../components/Posts";

const PostPage: React.FC = () => {
  return (
    <>
      <h1
        className="page-header"
        style={{
          fontFamily: "Josefin Sans, sans-serif",
          fontSize: "27px",
          fontWeight: "300",
          textTransform: "uppercase",
          lineHeight: "25px",
          letterSpacing: "10px",
          marginBottom: "20px",
          color: "#303030",
        }}
      >
        Blog
      </h1>
      <Posts />
    </>
  );
};

export default PostPage;
