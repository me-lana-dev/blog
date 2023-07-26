import React, { useEffect, useMemo, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Card, Col, Pagination, Row, Space, Spin } from "antd";
import type { PaginationProps } from "antd";
import { Link } from "react-router-dom";
import PostSearch from "./PostSearch";

const Posts: React.FC = () => {
  const { Meta } = Card;

  const { posts, error, isLoading, page, limit, total } = useTypedSelector(
    (state) => state.posts
  );
  console.log("totol", total);
  //console.log(posts, error, isLoading, page, limit, total);

  const { fetchPosts, setPostsPage, setPostsLimitPages } = useActions();
  const [filter, setFilter] = useState({ query: "" });

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setPostsPage(pageNumber);
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    setPostsPage(1);
    setPostsLimitPages(pageSize);
    //console.log(current, pageSize);
  };

  const searchedPosts = useMemo(() => {
    console.log("entered searchedPosts");
    if (filter.query !== "") {
      const query = filter.query;
      console.log("in if searchedPosts");
      fetchPosts(query, page, limit);
      return posts;

      // return posts.filter((post) =>
      //   post.title.toUpperCase().includes(filter.query.toUpperCase())
      // );
    }
    return posts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.query]);

  useEffect(() => {
    //console.log("fetch posts");
    fetchPosts(filter.query, page, limit);
    //console.log("render");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        direction="vertical"
        style={{ width: "100%", paddingInline: "50px" }}
        size={[0, 48]}
      >
        <Row gutter={[16, 24]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 18 }}>
            <PostSearch filter={filter} setFilter={setFilter} />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
            <Pagination
              className="pagination-top"
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSizeOptions={[20, 36, 52, 100]}
              onChange={onChange}
              defaultCurrent={page}
              total={total}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              defaultPageSize={limit}
            />
          </Col>
        </Row>
      </Space>

      <Space
        direction="horizontal"
        style={{ width: "100%", paddingBottom: "24px", paddingInline: "50px" }}
        size={[0, 48]}
      >
        <Row justify="start" align="stretch" gutter={[16, 24]}>
          {searchedPosts.map((post) => (
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

      <Space
        direction="vertical"
        style={{ width: "100%", paddingInline: "50px" }}
        size={[0, 48]}
      >
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <Pagination
              showSizeChanger={false}
              hideOnSinglePage={true}
              onChange={onChange}
              defaultCurrent={page}
              total={total}
              defaultPageSize={limit}
            />
          </Col>
        </Row>
      </Space>
    </>
  );
};

export default Posts;
