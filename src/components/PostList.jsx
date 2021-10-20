import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  //console.log({ posts, title });
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post, index) => {
        return (
          <PostItem
            remove={remove}
            number={index + 1}
            post={post}
            key={post.id}
          />
        );
      })}
    </div>
  );
};

export default PostList;
