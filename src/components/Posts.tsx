import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Card, Col, Row, Space } from "antd";

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
    <Space
      direction="horizontal"
      style={{ width: "100%", paddingBottom: "24px" }}
      size={[0, 48]}
    >
      <Row justify="space-between" align="stretch" gutter={[16, 24]}>
        {posts.map((post) => (
          <Col span={6}>
            <Card
              key={post.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                minHeight: "100%",
              }}
            >
              <strong style={{ marginRight: "16px" }}>{post.id}.</strong>{" "}
              <span>{post.title}</span>
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  );
};

export default Posts;
