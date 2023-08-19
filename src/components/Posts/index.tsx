import React from "react";
import PostsList from "./PostsGrid/PostsList";
import PostsPagination from "./PostsPagination/PostsPagination";
import PostsView from "./PostsView";

const index: React.FC = () => {
  return (
    <>
      <PostsView />
      <PostsList />
      <PostsPagination />
    </>
  );
};

export default index;
