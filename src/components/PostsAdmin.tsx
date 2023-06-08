import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import type { ColumnsType, TableProps } from "antd/es/table";
import {
  Card,
  Col,
  Pagination,
  PaginationProps,
  Row,
  Space,
  Spin,
  Table,
  Button,
  Modal,
} from "antd";
import { IPost } from "../models/post";
import PostForm from "./PostForm";
import { SorterResult } from "antd/es/table/interface";

const PostsAdmin: React.FC = () => {
  const { posts, error, isLoading, page, limit, total } = useTypedSelector(
    (state) => state.posts
  );
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { fetchPostsUser, setPostsPage, setPosts } = useActions();
  const [open, setOpen] = useState(false);
  const [newPost, setNewPost] = useState({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<IPost>>({
    order: "descend",
    columnKey: "id",
  });

  useEffect(() => {
    if (isAuth && user.id === undefined) {
      let id = Number(localStorage.getItem("id"));
      fetchPostsUser(page, limit, id);
    } else {
      let id = user.id;
      fetchPostsUser(page, limit, id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, user.id]);

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
          <Button type="primary" onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
          <Button type="primary" onClick={() => handleEdit(record.id)}>
            Edit
          </Button>
        </Space>
      ),
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      sortDirections: ["ascend", "descend"],
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

  const handleChange: TableProps<IPost>["onChange"] = (sorter) => {
    setSortedInfo(sorter as SorterResult<IPost>);
    sortedInfo.order === "descend"
      ? setSortedInfo({
          order: "ascend",
          columnKey: "id",
        })
      : setSortedInfo({
          order: "descend",
          columnKey: "id",
        });
  };

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setPostsPage(pageNumber);
  };

  const handleDelete = (id: React.Key) => {
    const newData = posts.filter((item) => item.id !== id);
    setPosts(newData);
  };

  const handleEdit = (id: React.Key) => {
    const newData = posts.filter((item) => item.id === id);

    setNewPost({
      ...newPost,
      userId: newData[0].userId,
      id: newData[0].id,
      title: newData[0].title,
      body: newData[0].body,
    });
    showModal();
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
          <Modal
            title="Edit Post"
            open={open}
            onCancel={handleCancel}
            footer={null}
          >
            <PostForm newPost={newPost} onSubmit={handleCancel} />
          </Modal>
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
                onChange={handleChange}
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
