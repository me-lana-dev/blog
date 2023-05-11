import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Card, Col, Pagination, Row, Space } from "antd";
import type { PaginationProps } from "antd";

const Posts: React.FC = () => {
  const { posts, error, isLoading, page, limit, total } = useTypedSelector(
    (state) => state.posts
  );
  console.log(posts, error, isLoading);
  const { fetchPosts, setPostsPage } = useActions();

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setPostsPage(pageNumber);
  };

  useEffect(() => {
    fetchPosts(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  return (
    <>
      <Space
        direction="horizontal"
        style={{ width: "100%", paddingBottom: "24px", paddingInline: "50px" }}
        size={[0, 48]}
      >
        <Row justify="space-between" align="stretch" gutter={[16, 24]}>
          {posts.map((post) => (
            <Col span={6} key={post.id}>
              <Card
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

      {/* <Space
        direction="horizontal"
        style={{ width: "100%", paddingBottom: "24px", paddingInline: "50px" }}
        size={[0, 48]}
      > */}
      <Pagination
        showSizeChanger={false}
        onChange={onChange}
        defaultCurrent={1}
        total={total}
        showTotal={(totalPages) => `Total ${totalPages} items`}
        defaultPageSize={20}
      />
      {/* </Space> */}
    </>
  );
};

export default Posts;
