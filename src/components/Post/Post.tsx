import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { useNavigate, useParams } from "react-router-dom";
import { Space, Row, Col, Card, Spin } from "antd";
import { Button } from "antd";

const Post = () => {
  const { post, error, isLoading } = useTypedSelector((state) => state.post);
  //console.log(post, error, isLoading);
  //console.log("isloading post", isLoading);
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log(typeof id);
  const { fetchPost } = useActions();

  const goBackLink = () => navigate(-1);

  useEffect(() => {
    //console.log("fetch post");
    fetchPost(Number(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
      <h1 style={{ textAlign: "center", margin: "50px" }}>{post.title}</h1>
      <Space
        direction="horizontal"
        style={{
          width: "100%",
          paddingBottom: "24px",
          paddingInline: "50px",
          justifyContent: "center",
        }}
        size={[0, 48]}
      >
        <Row justify="space-between" align="stretch" gutter={[16, 24]}>
          <Col span={24}>
            <Card>
              <Space wrap>
                <Button type="primary" onClick={goBackLink}>
                  Back
                </Button>
              </Space>
              <h2>
                {post.id}. {post.title}
              </h2>
              <p>{post.body}</p>
            </Card>
          </Col>
        </Row>
      </Space>
    </>
  );
};

export default Post;
