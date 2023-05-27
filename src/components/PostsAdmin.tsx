import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import type { ColumnsType } from "antd/es/table";
import {
  Card,
  Col,
  Pagination,
  PaginationProps,
  Row,
  Space,
  Spin,
  Table,
} from "antd";
import { IPost } from "../models/post";

const PostsAdmin: React.FC = () => {
  const { posts, error, isLoading, page, limit, total } = useTypedSelector(
    (state) => state.posts
  );
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  //console.log("PostsAdmin", "isAuth =", isAuth, "user =", user);
  //debugger;
  const { fetchPostsUser, setPostsPage, setPosts } = useActions();

  useEffect(() => {
    if (isAuth && user.id === undefined) {
      //debugger;
      //console.log(posts);
      let id = Number(localStorage.getItem("id"));
      fetchPostsUser(page, limit, id);
    } else {
      let id = user.id;
      //console.log(posts);
      //debugger;
      fetchPostsUser(page, limit, id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, user.id]);

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

  const columns: ColumnsType<IPost> = [
    {
      title: "UserId",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record: { id: React.Key }) => (
        <Space size="middle">
          <button onClick={() => handleDelete(record.id)}>Delete</button>{" "}
          <span>Редактировать</span>
        </Space>
      ),
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
  ];

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setPostsPage(pageNumber);
  };

  const handleDelete = (id: React.Key) => {
    const newData = posts.filter((item) => item.id !== id);
    setPosts(newData);
  };

  return (
    <>
      <Space
        direction="horizontal"
        style={{ width: "100%", paddingBottom: "24px", paddingInline: "50px" }}
        size={[0, 48]}
      >
        <Row justify="start" align="stretch" gutter={[16, 24]}>
          {posts.length > 0 && (
            <>
              <h2
                style={{
                  flexBasis: "100%",
                  textAlign: "center",
                  margin: "20px",
                }}
              >
                All my posts
              </h2>
              <Table
                dataSource={posts}
                columns={columns}
                rowKey={(record) => record.id}
                pagination={false}
              />
              <Pagination
                showSizeChanger={false}
                hideOnSinglePage={true}
                onChange={onChange}
                defaultCurrent={page}
                total={total}
                defaultPageSize={limit}
              />
            </>
          )}
        </Row>
      </Space>
    </>
  );
};

export default PostsAdmin;
