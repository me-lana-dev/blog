import { Space, Row, Form, Input, Button, Card } from "antd";
import React, { useState } from "react";
//import { useTypedSelector } from "../hooks/useTypedSelector";

const PostForm: React.FC = () => {
  //const { posts } = useTypedSelector((state) => state.posts);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //console.log(posts);
  const submit = () => {
    console.log(title, body);
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Body" name="body">
                <Input value={body} onChange={(e) => setBody(e.target.value)} />
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
