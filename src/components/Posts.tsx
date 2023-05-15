import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Card, Col, Pagination, Row, Space } from "antd";
import type { PaginationProps } from "antd";
import { Link } from "react-router-dom";

const Posts: React.FC = () => {
  const { Meta } = Card;

  const { posts, error, isLoading, page, limit, total } = useTypedSelector(
    (state) => state.posts
  );
  //console.log(posts, error, isLoading, page, limit, total);

  const { fetchPosts, setPostsPage } = useActions();

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setPostsPage(pageNumber);
  };

  useEffect(() => {
    fetchPosts(page, limit);
    //console.log("render");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

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
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                minHeight: "100%",
              }}
            >
              <span>Идет загрузка...</span>
            </Card>
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
        <Row justify="space-between" align="stretch" gutter={[16, 24]}>
          {posts.map((post) => (
            <Col span={6} key={post.id}>
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  minHeight: "100%",
                }}
              >
                <div
                  className="ant-card-number"
                  style={{ marginRight: "16px" }}
                >
                  {post.id}.
                </div>
                <Link
                  to={"/posts/" + post.id}
                  state={{ currentlink: "posts" }}
                  className="ant-card-link"
                >
                  {post.title}
                </Link>
                <Meta description={post.body} />
              </Card>
            </Col>
          ))}
        </Row>
      </Space>

      <Pagination
        showSizeChanger={false}
        onChange={onChange}
        defaultCurrent={page}
        total={total}
        showTotal={(totalPages) => `Total ${totalPages} items`}
        defaultPageSize={limit}
      />
    </>
  );
};

export default Posts;
