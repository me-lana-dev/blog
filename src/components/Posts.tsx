import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Posts: React.FC = () => {
  const { posts, error, isLoading } = useTypedSelector((state) => state.posts);
  console.log(posts, error, isLoading);
  const { fetchPosts } = useActions();
  console.log(fetchPosts);

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
          }}
        >
          <strong style={{ marginRight: "16px" }}>{post.id}.</strong>{" "}
          <span>{post.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Posts;
