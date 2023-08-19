import React, { useEffect } from "react";
import { Card, Col, Row, Space, Spin } from "antd";
import PostsItem from "./PostsItem";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

const PostsList: React.FC = () => {
  const { posts, error, isLoading, page, limit } = useTypedSelector(
    (state) => state.posts
  );
  const { filter } = useTypedSelector((state) => state.filter);
  const { fetchPosts } = useActions();

  useEffect(() => {
    fetchPosts(filter.query, page, limit);
    console.log("useEffect posts.tsx fetch posts");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.query, page, limit]);

  if (isLoading) {
    return (
      <Space
        direction="horizontal"
        style={{
          width: "100%",
          paddingTop: "24px",
          paddingBottom: "24px",
          paddingInline: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
        size={[0, 48]}
      >
        <Row justify="space-between" align="stretch" gutter={[16, 24]}>
          <Col span={24}>
            <Spin size="large" />
          </Col>
        </Row>
      </Space>
    );
  }

  if (error) {
    return (
      <Space
        direction="horizontal"
        style={{
          width: "100%",
          paddingTop: "24px",
          paddingBottom: "24px",
          paddingInline: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
        size={[0, 48]}
      >
        <Row justify="space-between" align="stretch" gutter={[16, 24]}>
          <Col span={24}>
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                minHeight: "100%",
              }}
            >
              <span>{error}</span>
            </Card>
          </Col>
        </Row>
      </Space>
    );
  }

  return (
    <>
      <Space
        direction="horizontal"
        style={{ width: "100%", paddingBottom: "24px", paddingInline: "50px" }}
        size={[0, 48]}
      >
        <Row justify="start" align="stretch" gutter={[16, 24]}>
          {posts.map((post) => (
            <PostsItem post={post} key={post.id} />
          ))}
        </Row>
      </Space>
    </>
  );
};

export default PostsList;
