import { Space, Row, Form, Input, Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const PostForm: React.FC = () => {
  const { posts } = useTypedSelector((state) => state.posts);
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth && user.id === undefined) {
      user.id = Number(localStorage.getItem("id"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  const { setPosts } = useActions();

  const [newPost, setNewPost] = useState({
    userId: user.id,
    id: Date.now(),
    title: "",
    body: "",
  });

  const submit = () => {
    setNewPost({ ...newPost, id: Date.now() });
    const newData = [...posts, newPost];
    setPosts(newData);
  };

  return (
    <>
      <Space
        direction="vertical"
        style={{ width: "100%", paddingBottom: "24px", paddingInline: "50px" }}
        size={[0, 48]}
      >
        <Row justify="start" align="stretch" gutter={[16, 24]}>
          <Card style={{ width: "100%" }}>
            <Form onFinish={submit}>
              <h2 style={{ textAlign: "center", margin: "0 0 20px 0" }}>
                Add new Post
              </h2>
              <Form.Item label="Title" name="title">
                <Input
                  value={newPost.title}
                  onChange={(e) =>
                    setNewPost({ ...newPost, title: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item label="Body" name="body">
                <Input
                  value={newPost.body}
                  onChange={(e) =>
                    setNewPost({ ...newPost, body: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add new post
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Row>
      </Space>
    </>
  );
};

export default PostForm;
