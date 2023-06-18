import { Space, Row, Form, Input, Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const PostForm = (props: any) => {
  const [form] = Form.useForm();
  const { posts } = useTypedSelector((state) => state.posts);
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { setPosts } = useActions();

  useEffect(() => {
    if (isAuth && user.id === undefined) {
      user.id = Number(localStorage.getItem("id"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  const [newPost, setNewPost] = useState({
    userId: user.id,
    id: Date.now(),
    title: "",
    body: "",
  });

  useEffect(() => {
    if (props.newPost) {
      //console.log("new");
      form.setFieldsValue({
        id: props.newPost.id,
        userId: props.newPost.userId,
        title: props.newPost.title,
        body: props.newPost.body,
      });
      setNewPost({
        ...newPost,
        id: props.newPost.id,
        title: props.newPost.title,
        body: props.newPost.body,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.newPost]);

  const submit = () => {
    if (props.newPost) {
      const newData = posts.filter((item) => item.id !== props.newPost.id);
      const editData = [...newData, newPost];
      setPosts(editData);
    } else {
      const newData = [...posts, { ...newPost, id: Date.now() }];
      setPosts(newData);
    }
    if (props.onSubmit) {
      props.onSubmit();
    }
    form.setFieldsValue({ title: "", body: "" });
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
            <Form id="editPost" onFinish={submit} form={form}>
              <h2 style={{ textAlign: "center", margin: "0 0 20px 0" }}>
                {props.formHeader}
              </h2>
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input title!" }]}
              >
                <Input
                  value={newPost.title}
                  onChange={(e) =>
                    setNewPost({ ...newPost, title: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item
                label="Body"
                name="body"
                rules={[
                  { required: true, message: "Please input description!" },
                ]}
              >
                <Input
                  value={newPost.body}
                  onChange={(e) =>
                    setNewPost({ ...newPost, body: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {props.buttonTxt}
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
